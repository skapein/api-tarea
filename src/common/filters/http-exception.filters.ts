import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { Http2ServerRequest } from "http2";

@Catch()
export class AllExceptionFilter implements ExceptionFilter{
    catch(exception: any, host: ArgumentsHost) {
        const contexto = host.switchToHttp(); //tranformamos objeto a tipo http
        const response = contexto.getResponse();
        const request = contexto.getRequest();

        const status = exception instanceof HttpException ? exception.getStatus (): HttpStatus.INTERNAL_SERVER_ERROR;

        const msg = exception instanceof HttpException ? exception.getResponse(): exception;

        response.status(status).json({ time:new Date(). toISOString(), path: request.url, error: msg,
    });


    }



}