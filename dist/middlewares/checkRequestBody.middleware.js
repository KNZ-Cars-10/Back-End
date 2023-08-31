"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkRequestBody = (schema) => (req, res, next) => {
    const validatedData = schema.parse(req.body);
    req.body = validatedData;
    return next();
};
exports.default = checkRequestBody;
