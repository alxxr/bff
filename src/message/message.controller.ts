import { Controller, Post, Body } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';

@Controller('message')
export class MessageController {
    constructor(private httpService: HttpService) { }

    @Post('send')
    async sendMessage(@Body() data: any) {
        try {
            // Aquí puedes enviar los mensajes al microservicio de Python
            const response = await firstValueFrom(this.httpService.post('http://direccion_del_microservicio', data));
            return response.data;
        } catch (error) {
            throw new Error('Error al enviar los mensajes al microservicio de Python');
        }
    }
}
