const asyncHandler = (requestHandler) => {
    return async (req, res, next) => {
        try {
            await Promise.resolve(requestHandler(req, res, next));
        } catch (error) {
            const statusCode = error.statusCode  ;
            const errorMessage = error.message  ;
            res.status(statusCode).json({
                success: false,
                error: errorMessage
            });
        }
    };
};
export {asyncHandler}