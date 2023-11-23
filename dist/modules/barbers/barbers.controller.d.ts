import { BarbersService } from './barbers.service';
import { CreateBarberDto } from './dto/create-barber.dto';
import { UpdateBarberDto } from './dto/update-barber.dto';
export declare class BarbersController {
    private readonly barbersService;
    constructor(barbersService: BarbersService);
    create(createBarberDto: CreateBarberDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBarberDto: UpdateBarberDto): string;
    remove(id: string): string;
}
