# Pharmakarma - Node & JavaScript implementation


[//]: # (badges)

### Support

 ![Node.js supported](https://img.shields.io/badge/node-%3E%3D18.7.0-blue) 

### Test Coverage

 ![92.25%25 lines covered](https://img.shields.io/badge/lines-92.25%25-brightgreen) ![92.25%25 statements covered](https://img.shields.io/badge/statements-92.25%25-brightgreen) ![85.09%25 functions covered](https://img.shields.io/badge/functions-85.09%25-brightgreen) ![84.83%25 branches covered](https://img.shields.io/badge/branches-84.83%25-brightgreen)

[//]: # (badges)

### Client's TypeScript Interface

[//]: # (typescript client)

```typescript
export interface ClientOptions {
    partnerId?: string;
    accessToken?: string;
    version?: number;
    prefix?: string;
    url?: string | URL;
}

export interface Client {
    addPartner(partner: PartnerData): Promise<Partner>;
    addCategory(category: CategoryData): Promise<Category>;
    addProduct(product: ProductData): Promise<Product>;
    addReport(report: ReportData): Promise<Report>;
    getProduct(productId: string): Promise<Product | undefined>;
    getReport(reportId: string): Promise<Report | undefined>
    listPartners(): Promise<Partner[]>;
    listSystemLogs(): Promise<SystemLog[]>;
    listProducts(): Promise<Product[]>;
    listReports(): Promise<Report[]>;
    listCategories(): Promise<Category[]>;
    background(query: Record<string, string> | URLSearchParams): Promise<void>;
}

export interface CategoryData extends Record<string, unknown> {
    categoryName: string;
    countryCode?: string;
}

export interface Category extends CategoryData {
    categoryId: string;
    createdAt: string;
    updatedAt: string;
}

export interface Expiring {
    expiresAt?: string;
}

export interface ActiveIngredientMetrics extends Record<string, unknown> {
    type: string;
    unit: string;
    value: string;
    // If the calculation of cost takes into account the
    // proportion of this vs total active ingredients
    proportional?: boolean;
    mean?: boolean;
    size?: ProductSizeData;
    prefix?: string;
}

export interface ProductMetricData extends Record<string, unknown> {
    productId: string;
    activeIngredients: ActiveIngredientMetrics[];
}

export interface MetricsData extends ReportDateData, Expiring, CalculationConsent {
    products: ProductMetricData[];
    countryCode: string;
    timezone?: string;
    anonymous?: boolean;
}

export interface ReportMetrics extends MetricsData, Record<string, unknown> {
    metricsId: string;
    reportId: string;
    reportedAt: string;
    createdAt: string;
    updatedAt: string;
    // consent required
    calculationConsent: CalculationConsentItem[];
}

export type CountryProductMetricDuration = "day" | "month";

export interface CountryProductMetrics extends MetricsData {
    metricsId: string;
    createdAt: string;
    updatedAt: string;
    duration: CountryProductMetricDuration;
    timezone: string;
    reportingDateKey: keyof ReportDateData;
}

export interface PartnerData extends Record<string, unknown> {
    partnerName: string;
    countryCode?: string; // "NZ"
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

export interface ReportDateData {
    orderedAt?: string;
    shippedAt?: string;
    receivedAt?: string;
    updatedAt?: string;
    createdAt?: string;
    reportedAt?: string;
}

export interface CalculationConsentItem extends Record<string, unknown> {
    calculationKey: string;
    consentedAt: string;
}

export interface CalculationConsent {
    calculationConsent?: CalculationConsentItem[];
}

export interface ReportData extends ReportDateData, Expiring, CalculationConsent, Record<string, unknown> {
    countryCode: string; // "NZ"
    currencySymbol?: string; // "$"
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
}

export interface Report extends ReportData {
    reportId: string;
    createdAt: string;
    updatedAt: string;
    reportedAt: string;
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

