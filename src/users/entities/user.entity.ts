import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { hash } from 'bcrypt';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lastname: string;

    @Column({ unique: true })
    email: string;

    @Column({ unique: true })
    phone: string;

    @Column({ nullable: true })
    image: string;

    @Column()
    password: string;

    @Column({ nullable: true })
    notification_token: string;

    @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
    created_at: Date;

    @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
    updated_at: Date;

    @BeforeInsert()
    async hashPassword() {
        this.password = await hash(this.password, Number(process.env.HASH_SALT) || 10);
    }
}