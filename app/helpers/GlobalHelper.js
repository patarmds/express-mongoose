module.exports = {
    response : (data, message) => {
        return {
            data : data ?? null,
            message : message
        }
    }
}