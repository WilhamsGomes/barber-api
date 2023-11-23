import { CreateBarberDto } from './dto/create-barber.dto';
import { UpdateBarberDto } from './dto/update-barber.dto';
export declare class BarbersService {
    create(createBarberDto: CreateBarberDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateBarberDto: UpdateBarberDto): string;
    remove(id: number): string;
}
