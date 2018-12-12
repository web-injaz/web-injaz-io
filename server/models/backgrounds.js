const bgSchema = mongoose.Schema({
    bg: { type: String, required: true },
    text: { type: String, required: false },
    links: { type: String, required: false },
    headers: { type: String, required: false },
    created: { type: Date, default: () => new Date() }
});

module.exports = mongoose.model('background', bgSchema);