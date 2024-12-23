import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { message: string } {
    try {
      const result = null;

      if (!result) {
        console.error('Error: No result found in try block.');
        throw new BadRequestException('No result found in try block.');
      }

      console.log('Success: Result found in try block.');
      return result;
    } catch (error) {
      console.error(
        `Error in catch block: ${error.message || 'An unexpected error occurred.'}`,
      );
      throw new BadRequestException(
        error.message || 'An error occurred in the catch block.',
      );
    }
  }
  processBody(body: any): { message: string } {
    try {
      const result = 'heloo';
      if (result) {
        console.error('Error: Invalid or empty body.');
        throw new BadRequestException('Body is missing or invalid.');
      }

      console.log('Success: Body processed correctly.');
      return {
        message: body,
      };
    } catch (error) {
      console.error(
        `Error in processBody: ${error.message || 'An unexpected error occurred.'}`,
      );
      throw new BadRequestException(
        error.message || 'An error occurred while processing the body.',
      );
    }
  }
}
