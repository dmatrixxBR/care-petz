import { HttpErrorResponse } from "@angular/common/http";
import { AppError } from "./app-error";
import { throwError } from "rxjs";

export class ErrorUtils {
    public static handleError(error: HttpErrorResponse) {
        console.log('handleError');
        let errorMessage = '';
        console.log(error);
        if (error.status === 0) {
          //if (error instanceof Error || error instanceof ErrorEvent) {
          console.error('cliente');
          errorMessage =
            error instanceof AppError
              ? error.message
              : 'Opsss! Um problema inesperado aconteceu! (lado cliente)';
        } else {
          console.error('servidor');
          errorMessage = ErrorUtils.getServerErrorMessage(error);
        }           
        return throwError( ()=>{
            return new Error(errorMessage);
        });    
       
      }
    
      public static getServerErrorMessage(error: HttpErrorResponse) {
        switch (error.status) {
          case 404: {
            return `O recurso informado não foi encontrado!`;
          }
          case 403: {
            return `O acesso foi negado!`;
          }
          case 500: {
            return `Oppsss! Um erro inesperado aconteceu!`;
          }
          default: {
            return `Oppsss! Um erro inesperado aconteceu! Tente novamente mais tarde!`;
          }
        }
      }
}
