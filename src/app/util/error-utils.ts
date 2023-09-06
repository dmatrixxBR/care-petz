import { HttpErrorResponse } from "@angular/common/http";
import { AppError } from "./app-error";
import { throwError } from "rxjs";

export class ErrorUtils {
    public static handleError(error: HttpErrorResponse) {
        console.log('handleError');
        let errorMessage = '';
        console.log(error);
        if (error.status === 0) {
          console.error('cliente');
          errorMessage =
            error instanceof AppError
              ? error.message
              : ' Problema inesperado  (lado cliente)';
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
          case 402:{
            return `Pagamento Requerido`;
          }
          case 404: {
            return `O recurso informado não foi encontrado!`;
          }
          case 403: {
            return `O acesso foi negado!`;
          }
          case 405:{
            return `Método não permitido`;
          }
          case 408:{
            return `Timeout Requerido`;
          }
          case 410:{
            return `Conteúdo Excluido do Servidor`;
          }

          case 500: {
            return `Erro inesperado!`;
          }
          default: {
            return `Erro inesperado! Tente novamente mais tarde!`;
          }
        }
      }
}
