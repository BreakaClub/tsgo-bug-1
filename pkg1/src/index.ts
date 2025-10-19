import { db } from '@breaka/pkg2';
import { Kysely } from 'kysely';

function wantsKyself(ky: Kysely<any>) {
}

wantsKyself(db);
