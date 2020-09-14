import {MigrationInterface, QueryRunner} from "typeorm";

export class usePro1599867908490 implements MigrationInterface {
    name = 'usePro1599867908490'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "houseNo" integer NOT NULL, "street1" character varying(25) NOT NULL, "street2" character varying(25), "bustop" character varying(25), "road" character varying(25) NOT NULL, "area" character varying(25), "city" character varying(25), "state" character varying(25), "userId" uuid, CONSTRAINT "REL_d25f1ea79e282cc8a42bd616aa" UNIQUE ("userId"), CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "user_role_enum" AS ENUM('admin', 'viewer', 'doctor', 'nurse', 'keeper')`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "role" "user_role_enum" NOT NULL DEFAULT 'viewer', "firstName" character varying(25) NOT NULL, "lastName" character varying(25) NOT NULL, "initials" character varying(5), "password" character varying NOT NULL, "title" character varying(25) NOT NULL, "occupation" character varying(25) NOT NULL, "phone" text NOT NULL, "email" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "illness" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying(25) NOT NULL, "lastName" character varying(25) NOT NULL, "initials" character varying(5), "title" character varying(25) NOT NULL, "occupation" character varying(25) NOT NULL, "phone" text NOT NULL, "email" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_b6e7e0bfbbd42bcc81802b02378" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "invoice" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying(25) NOT NULL, "lastName" character varying(25) NOT NULL, "initials" character varying(5), "title" character varying(25) NOT NULL, "occupation" character varying(25) NOT NULL, "phone" text NOT NULL, "email" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_15d25c200d9bcd8a33f698daf18" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "next_of_kin" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying(25) NOT NULL, "lastName" character varying(25) NOT NULL, "initials" character varying(5), "title" character varying(25) NOT NULL, "occupation" character varying(25) NOT NULL, "phone" text NOT NULL, "email" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_9af2290f156476424c8c6554690" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "patient" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying(25) NOT NULL, "lastName" character varying(25) NOT NULL, "initials" character varying(5), "title" character varying(25) NOT NULL, "occupation" character varying(25) NOT NULL, "phone" text NOT NULL, "email" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_8dfa510bb29ad31ab2139fbfb99" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "payment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying(25) NOT NULL, "lastName" character varying(25) NOT NULL, "initials" character varying(5), "title" character varying(25) NOT NULL, "occupation" character varying(25) NOT NULL, "phone" text NOT NULL, "email" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_fcaec7df5adf9cac408c686b2ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sponsor" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying(25) NOT NULL, "lastName" character varying(25) NOT NULL, "initials" character varying(5), "title" character varying(25) NOT NULL, "occupation" character varying(25) NOT NULL, "phone" text NOT NULL, "email" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_31c4354cde945c685aabe017541" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "treatment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying(25) NOT NULL, "lastName" character varying(25) NOT NULL, "initials" character varying(5), "title" character varying(25) NOT NULL, "occupation" character varying(25) NOT NULL, "phone" text NOT NULL, "email" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_5ed256f72665dee35f8e47b416e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "visit" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "visit_date" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_c9919ef5a07627657c535d8eb88" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vital" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying(25) NOT NULL, "lastName" character varying(25) NOT NULL, "initials" character varying(5), "title" character varying(25) NOT NULL, "occupation" character varying(25) NOT NULL, "phone" text NOT NULL, "email" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_6fb53d213ad96248abcc4cc168f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "FK_d25f1ea79e282cc8a42bd616aa3" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "FK_d25f1ea79e282cc8a42bd616aa3"`);
        await queryRunner.query(`DROP TABLE "vital"`);
        await queryRunner.query(`DROP TABLE "visit"`);
        await queryRunner.query(`DROP TABLE "treatment"`);
        await queryRunner.query(`DROP TABLE "sponsor"`);
        await queryRunner.query(`DROP TABLE "payment"`);
        await queryRunner.query(`DROP TABLE "patient"`);
        await queryRunner.query(`DROP TABLE "next_of_kin"`);
        await queryRunner.query(`DROP TABLE "invoice"`);
        await queryRunner.query(`DROP TABLE "illness"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TYPE "user_role_enum"`);
        await queryRunner.query(`DROP TABLE "address"`);
    }

}
