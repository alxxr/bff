import { Controller, Post, Body } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Controller('message')
export class MessageController {
  constructor(private httpService: HttpService) { }

  @Post('send')
  async sendMessage(@Body() data: any) {

    const requestData = {
        prospects: data.prospects.map(prospect => ({
            prospect: prospect.prospect,
            messages: prospect.messages,
        })),
    };
    try {
        const requestDataJson = JSON.stringify(requestData);
        const response = await this.httpService.post('http://127.0.0.1:8000/analyze_sentiment/', requestDataJson, {headers: {'Content-Type': 'application/json',}}).toPromise();
        return response.data;
    
    } catch (error) {

      throw new Error('Error al enviar los mensajes al microservicio de FastAPI');

    }
  }
}
