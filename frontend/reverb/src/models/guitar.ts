export default interface Guitar{
    _id: String,
    image: String,
    brand: String,
    model: String,
    shape: String,
    specs: {
        colour: String, body: String, top: String, neck: String, fretboard: String, pickups: String
    },
    strings: Number
};
