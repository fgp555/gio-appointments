"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProfessionalScheduleDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_professional_schedule_dto_1 = require("./create-professional-schedule.dto");
class UpdateProfessionalScheduleDto extends (0, mapped_types_1.PartialType)(create_professional_schedule_dto_1.CreateProfessionalScheduleDto) {
}
exports.UpdateProfessionalScheduleDto = UpdateProfessionalScheduleDto;
//# sourceMappingURL=update-professional-schedule.dto.js.map