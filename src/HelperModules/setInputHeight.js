// source attribution: https://www.youtube.com/watch?v=87wfMZ56egU

export default (element, defaultHeight) => {
    if(element) {
        // supports passing an event and a raw element via React ref
        const target = element.target ? element.target : element;
        target.style.height = defaultHeight;
        target.style.height = `${target.scrollHeight}px`;
    };
};