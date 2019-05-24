export class ErrorModel {
    public errorCode: number | string;
    public errorMessage: string;
    public errorType: string;

    constructor(errorCode: string, errorMessage: string, errorType: string) {
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;
        this.errorType = errorType;
    }
}
