"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAdministrativeUserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_administrative_user_dto_1 = require("./create-administrative-user.dto");
class UpdateAdministrativeUserDto extends (0, mapped_types_1.PartialType)(create_administrative_user_dto_1.CreateAdministrativeUserDto) {
}
exports.UpdateAdministrativeUserDto = UpdateAdministrativeUserDto;
//# sourceMappingURL=update-administrative-user.dto.js.map