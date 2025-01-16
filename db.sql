-- Table: public.ContactForms

DROP TABLE IF EXISTS public."ContactForms";

CREATE TABLE public."ContactForms"
(
    id serial PRIMARY KEY, -- This automatically creates the sequence
    uuid uuid NOT NULL,
    subject character varying(255) COLLATE pg_catalog."default",
    name character varying(255) COLLATE pg_catalog."default",
    email character varying(255) COLLATE pg_catalog."default",
    phone character varying(255) COLLATE pg_catalog."default",
    message text COLLATE pg_catalog."default",
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "ContactForms_uuid_key" UNIQUE (uuid)
);

ALTER TABLE public."ContactForms"
OWNER TO mrtechne;


-- Table: public.Drivers

DROP TABLE IF EXISTS public."Drivers";

CREATE TABLE IF NOT EXISTS public."Drivers"
(
    id serial PRIMARY KEY,
    uuid uuid NOT NULL,
    email character varying(255) COLLATE pg_catalog."default",
    email_verified boolean DEFAULT false,
    "agreedAllPolicies" boolean DEFAULT false,
    "isViewed" boolean DEFAULT false,
    otp character varying(255) COLLATE pg_catalog."default",
    otp_expires_at timestamp with time zone,
    application_status character varying(255) COLLATE pg_catalog."default" DEFAULT NULL::character varying,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "Drivers_uuid_key" UNIQUE (uuid)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Drivers"
    OWNER to mrtechne;

-- Table: public.DriverDetails

DROP TABLE IF EXISTS public."DriverDetails";

CREATE TABLE IF NOT EXISTS public."DriverDetails"
(
    id serial PRIMARY KEY,
    "driverId" integer NOT NULL,
    name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    license_number character varying(255) COLLATE pg_catalog."default",
    license_expiry character varying(255) COLLATE pg_catalog."default",
    license_class character varying(255) COLLATE pg_catalog."default",
    license_province character varying(255) COLLATE pg_catalog."default",
    street_address character varying(255) COLLATE pg_catalog."default",
    city character varying(255) COLLATE pg_catalog."default",
    zipcode character varying(255) COLLATE pg_catalog."default",
    province character varying(255) COLLATE pg_catalog."default",
    country character varying(255) COLLATE pg_catalog."default",
    phone_number character varying(255) COLLATE pg_catalog."default",
    dob character varying(255) COLLATE pg_catalog."default",
    sin character varying(255) COLLATE pg_catalog."default",
    addresses_past_3_years jsonb,
    medical_expiry character varying(255) COLLATE pg_catalog."default",
    owner_operator jsonb,
    accidents_in_five_years jsonb,
    education jsonb,
    positive_drug_test boolean,
    sex character varying(255) COLLATE pg_catalog."default",
    marital_status character varying(255) COLLATE pg_catalog."default",
    number_of_dependents integer,
    first_person_to_contact jsonb,
    second_person_to_contact jsonb,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    CONSTRAINT "DriverDetails_driverId_fkey" FOREIGN KEY ("driverId")
        REFERENCES public."Drivers" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."DriverDetails"
    OWNER to mrtechne;

-- Table: public.EmergencyContacts

DROP TABLE IF EXISTS public."EmergencyContacts";

CREATE TABLE IF NOT EXISTS public."EmergencyContacts"
(
    id serial PRIMARY KEY,
    "driverId" integer NOT NULL,
    "emergencyContacts" jsonb NOT NULL,
    "createdAt" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."EmergencyContacts"
    OWNER to mrtechne;

-- Table: public.EmploymentHistories

DROP TABLE IF EXISTS public."EmploymentHistories";

CREATE TABLE IF NOT EXISTS public."EmploymentHistories"
(
    id serial PRIMARY KEY,
    "driverId" integer NOT NULL,
    "employmentHistory" jsonb NOT NULL,
    "createdAt" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."EmploymentHistories"
    OWNER to mrtechne;

-- Table: public.Questionnaires

DROP TABLE IF EXISTS public."Questionnaires";

CREATE TABLE IF NOT EXISTS public."Questionnaires"
(
    id serial PRIMARY KEY,
    "driverId" integer NOT NULL,
    questions jsonb NOT NULL,
    "createdAt" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Questionnaires"
    OWNER to mrtechne;

-- Table: public.Users

DROP TABLE IF EXISTS public."Users";

CREATE TABLE IF NOT EXISTS public."Users"
(
    id serial PRIMARY KEY,
    username character varying(255) COLLATE pg_catalog."default",
    password character varying(255) COLLATE pg_catalog."default",
    role character varying(255) COLLATE pg_catalog."default",
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Users"
    OWNER to mrtechne;