
export default class SupplierCustomerCtrl {
    constructor(PaymentService) {
        this._PaymentService = PaymentService;
    }
    $onInit() {
        this.getPendingPaymentsCount();
    }
    getPendingPaymentsCount() {
        this.pendingPaymentsCountIsLoaded = false;
        const _onSuccess = (res) => {
            this.pendingPaymentsCount = res.data.data.count;
        };

        const _onError = (err) => {
            if (err.code === 500) {
                this.hasError = true;
            } else if (err.code === 501) {
                this.noInternetConnection = true;
            }
        };
        const _onFinal = () => {
            this.pendingPaymentsCountIsLoaded = true;
        };
        return this._PaymentService.getPendingPaymentsCount()
            .then(_onSuccess, _onError)
            .finally(_onFinal);
    }
}
SupplierCustomerCtrl.$inject = ['PaymentService'];
