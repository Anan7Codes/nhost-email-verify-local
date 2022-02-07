SET check_function_bodies = false;
CREATE TABLE public.campaigns (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    "ProductName" jsonb NOT NULL,
    "ProductDescription" jsonb NOT NULL,
    "GiftName" jsonb NOT NULL,
    "GiftDescription" jsonb NOT NULL,
    "TotalCoupons" integer NOT NULL,
    "Price" integer NOT NULL,
    "DrawDate" date NOT NULL,
    "Image" text NOT NULL,
    "SoldOut" boolean DEFAULT false NOT NULL,
    "SoldOutCoupons" integer DEFAULT 0 NOT NULL
);
CREATE TABLE public.profiles (
    user_id uuid NOT NULL,
    gender boolean,
    "phoneNumber" text,
    nationality text,
    "countryOfResidence" text,
    "shippingAddress" jsonb,
    "amountSpent" integer DEFAULT 0 NOT NULL
);
ALTER TABLE ONLY public.campaigns
    ADD CONSTRAINT campaigns_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.profiles
    ADD CONSTRAINT profiles_pkey PRIMARY KEY (user_id);
