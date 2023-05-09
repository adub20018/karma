import {isNumberString} from "../product";
import {Report} from "./types";

export interface ProductReport extends Report {
    // These are the expected field for a completed product report
    productPurchase: true
    productPurchaseTotalCost: `${number}`;
    productPurchaseItems: `${number}`;
    productPurchaseItemCost: `${number}`;
    productPurchaseDeliveryCost: `${number}`;
    productPurchaseFeeCost?: `${number}`;
}

export function isProductReport(report: Report): report is ProductReport {
    return !!(
        report.productPurchase &&
        isNumberString(report.productPurchaseTotalCost) &&
        isNumberString(report.productPurchaseItemCost) &&
        isNumberString(report.productPurchaseItems) &&
        isNumberString(report.productPurchaseDeliveryCost) &&
        (
            (
                !report.productPurchaseFeeCost &&
                typeof report.productPurchaseFeeCost !== "string"
            ) ||
            isNumberString(report.productPurchaseFeeCost)
        )
    )
}