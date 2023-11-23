"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarbersController = void 0;
const common_1 = require("@nestjs/common");
const barbers_service_1 = require("./barbers.service");
const create_barber_dto_1 = require("./dto/create-barber.dto");
const update_barber_dto_1 = require("./dto/update-barber.dto");
let BarbersController = class BarbersController {
    constructor(barbersService) {
        this.barbersService = barbersService;
    }
    create(createBarberDto) {
        return this.barbersService.create(createBarberDto);
    }
    findAll() {
        return this.barbersService.findAll();
    }
    findOne(id) {
        return this.barbersService.findOne(+id);
    }
    update(id, updateBarberDto) {
        return this.barbersService.update(+id, updateBarberDto);
    }
    remove(id) {
        return this.barbersService.remove(+id);
    }
};
exports.BarbersController = BarbersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_barber_dto_1.CreateBarberDto]),
    __metadata("design:returntype", void 0)
], BarbersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BarbersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BarbersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_barber_dto_1.UpdateBarberDto]),
    __metadata("design:returntype", void 0)
], BarbersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BarbersController.prototype, "remove", null);
exports.BarbersController = BarbersController = __decorate([
    (0, common_1.Controller)('barbers'),
    __metadata("design:paramtypes", [barbers_service_1.BarbersService])
], BarbersController);
//# sourceMappingURL=barbers.controller.js.map