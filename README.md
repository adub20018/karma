# Pharmakarma - Node & JavaScript implementation


[//]: # (badges)

### Support

 ![Node.js supported](https://img.shields.io/badge/node-%3E%3D18.7.0-blue) 

### Test Coverage

 ![91.65%25 lines covered](https://img.shields.io/badge/lines-91.65%25-brightgreen) ![91.65%25 statements covered](https://img.shields.io/badge/statements-91.65%25-brightgreen) ![77.27%25 functions covered](https://img.shields.io/badge/functions-77.27%25-yellow) ![82.69%25 branches covered](https://img.shields.io/badge/branches-82.69%25-brightgreen)

[//]: # (badges)

### Client's TypeScript Interface

[//]: # (typescript client)

```typescript
export interface CategoryData extends Record<string, unknown> {
    categoryName: string;
    countryCode?: string;
}

export interface Category extends CategoryData {
    categoryId: string;
    createdAt: string;
    updatedAt: string;
}

export interface ActiveIngredientMetrics {
    type: string;
    unit: string;
    value: string;
    // If the calculation of cost takes into account the
    // proportion of this vs total active ingredients
    proportional?: boolean;
}

export interface ReportMetricsData extends Record<string, unknown> {
    activeIngredients: ActiveIngredientMetrics[]
}

export interface ReportMetrics extends ReportMetricsData {
    reportId: string;
    createdAt: string;
    updatedAt: string;
    countryCode: string;
}

export interface DailyMetricsData extends Record<string, unknown> {
    timestamp: string;
    countryCode: string;
}

export interface DailyMetrics extends DailyMetricsData {
    createdAt: string;
    updatedAt: string;
}

export interface MonthlyMetricsData extends Record<string, unknown> {
    timestamp: string;
    countryCode: string;
}

export interface MonthlyMetrics {
    createdAt: string;
    updatedAt: string;
}

export interface PartnerData extends Record<string, unknown> {
    partnerName: string;
    countryCode?: string; // "NZL"
    location?: string;
    remote?: boolean;
    onsite?: boolean;
    pharmacy?: boolean;
    delivery?: boolean;
    clinic?: boolean;
    website?: string;
}

export interface Partner extends PartnerData {
    partnerId: string;
    accessToken?: string;
    createdAt: string;
    updatedAt: string;
    approved?: boolean;
    approvedAt?: string;
    approvedByUserId?: string;
}

export interface ProductSizeData extends Record<string, unknown> {
    value: string;
    unit: string;
}

export interface ProductData extends Record<string, unknown> {
    productName: string;
    countryCode?: string;
    licencedPartnerId?: string;
    // Flag for products we don't have the exact licence date for
    licenceApprovedBeforeGivenDate?: boolean;
    licenceApprovedAt?: string;
    licenceExpiredAt?: string;
    // ISO 3166-1 alpha-3 country code
    licenceCountryCode?: string;
    // Flag for products we don't have the exact availability date for
    availableBeforeGivenDate?: boolean;
    availableAt?: string;
    // For products that we will no longer have available
    availableUntil?: string;
    sizes?: ProductSizeData[];
    // Direct text about the active ingredients, not specific values
    activeIngredientDescriptions?: string[];
    categoryId?: string;
}

export interface ProductActiveIngredient {
    type: string;
    unit: string;
    value: string;
    prefix?: string;
    calculated?: boolean;
    calculatedUnit?: string;
    size?: ProductSizeData;
}

export interface Product extends ProductData {
    productId: string;
    createdAt: string;
    updatedAt: string;
    activeIngredients?: ProductActiveIngredient[];
}

export interface ReportData extends Record<string, unknown> {
    countryCode: string; // "NZL"
    note?: string;
    parentReportId?: string;
    productId?: string;
    productName?: string; // Actual productName, not free text
    productText?: string; // User free text of the product
    productPurchase?: boolean;
    productPurchaseTotalCost?: string; // "908.50", capture the user input raw
    productPurchaseItems?: string; // "2", capture the user input raw
    productPurchaseItemCost?: string; // "450", capture the user input raw
    productPurchaseDeliveryCost?: string; // "8.50", capture the user input raw
    productPurchaseFeeCost?: string; // "3.50", capture the user input raw
    productPurchasePartnerId?: string;
    productPurchasePartnerName?: string; // Actual partnerName, not free text
    productPurchasePartnerText?: string; // User free text of the partnerName
    productSize?: ProductSizeData;
    createdByUserId?: string;
    anonymous?: boolean;
    orderedAt?: string;
    shippedAt?: string;
    receivedAt?: string;
}

export interface Report extends ReportData {
    reportId: string;
    createdAt: string;
    updatedAt: string;
}

export interface ReportReference extends Record<string, unknown> {
    reportId: string;
    createdAt: string;
}

export interface SystemLogData extends Record<string, unknown> {
    uniqueCode?: string;
    value?: number;
    partnerId: string;
    message: string;
    timestamp?: string;
    action?: string;
}

export interface SystemLog extends SystemLogData {
    systemLogId: string;
    timestamp: string;
}
```

[//]: # (typescript client)

