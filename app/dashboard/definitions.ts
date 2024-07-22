export type Revenue = {
    month: string;
    revenue: number;
};

export type LatestInvoice = {
    id: string;
    name: string;
    image_url: string;
    email: string;
    amount: string;
};

export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
    amount: number;
};
