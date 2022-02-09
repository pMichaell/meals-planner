import useWindowDimensions from "./use-window-dimensions";

const useIconSize = (minSize, maxSize) => {
    const {width} = useWindowDimensions();

    return width > 700 ? maxSize : minSize;
}

export default useIconSize;