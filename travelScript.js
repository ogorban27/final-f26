// TRAVEL DESTINATION CAROUSEL

const travelTrack = document.getElementById("travel-track");
const previousButton = document.getElementById("prev-location");
const nextButton = document.getElementById("next-location");

let travelPosition = 0;

function updateTravelCarousel() {
    const cards = travelTrack.querySelectorAll(".travel-card");

    if (cards.length === 0) return;

    const card = cards[0];
    const trackStyle = window.getComputedStyle(travelTrack);
    const gap = parseFloat(trackStyle.gap) || 0;

    const step = card.getBoundingClientRect().width + gap;

    const visibleCards = Math.floor(
        (travelTrack.parentElement.clientWidth + gap) / step
    );

    const maxPosition = Math.max(0, cards.length - visibleCards);

    travelPosition = Math.max(0, Math.min(travelPosition, maxPosition));

    travelTrack.style.transform =
        `translateX(-${travelPosition * step}px)`;

    previousButton.disabled = travelPosition === 0;
    nextButton.disabled = travelPosition === maxPosition;
}

nextButton.addEventListener("click", () => {
    travelPosition++;
    updateTravelCarousel();
});

previousButton.addEventListener("click", () => {
    travelPosition--;
    updateTravelCarousel();
});

window.addEventListener("resize", updateTravelCarousel);

updateTravelCarousel();