export const getData = (reading) => {
    console.log("clicked reading:", reading.id);
    return {
        type: "READINGS_DATA",
        payload: reading
    }
}
