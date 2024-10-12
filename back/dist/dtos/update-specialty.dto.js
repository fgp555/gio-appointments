"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSpecialtyDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_specialty_dto_1 = require("./create-specialty.dto");
class UpdateSpecialtyDto extends (0, mapped_types_1.PartialType)(create_specialty_dto_1.CreateSpecialtyDto) {
}
exports.UpdateSpecialtyDto = UpdateSpecialtyDto;
//# sourceMappingURL=update-specialty.dto.js.map