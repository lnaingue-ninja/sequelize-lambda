'use strict';
const SubscriberUserService = require('./services/SubscriberUserService');
const STATUS_CODE_OK = 200;
const STATUS_CODE_UNPROCESSABLE = 422;

module.exports.getOne = async (event) => {
	const { errors, data } = await SubscriberUserService.getOne(event);
	const response = {
		statusCode : null,
		headers : null,
		body : {}
	}
	if (errors){
		response.statusCode = STATUS_CODE_UNPROCESSABLE;
		response.headers = { 'Content-Type': 'text/plain' };
		response.body = JSON.stringify(errors);
	}else{
		response.statusCode = STATUS_CODE_OK;
		response.body = JSON.stringify(data);
	}
	return response;
}

module.exports.getAll = async (event) => {
	const { errors, data } = await SubscriberUserService.getAll(event);
	const response = {
		statusCode : null,
		headers : null,
		body : {}
	}
	if (errors){
		response.statusCode = STATUS_CODE_UNPROCESSABLE;
		response.headers = { 'Content-Type': 'text/plain' };
		response.body = JSON.stringify(errors);
	}else{
		response.statusCode = STATUS_CODE_OK;
		response.body = JSON.stringify(data);
	}
	return response;
}