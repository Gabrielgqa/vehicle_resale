import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PrismaService } from 'src/prisma/prisma.service';


@Controller('/cars/sold')
@UseGuards(AuthGuard('jwt'))
export class GetListSoldCarsController {
    constructor(private prisma: PrismaService) {}

    @Get()
    async handle() {
        const  cars = await this.prisma.car.findMany({
            where: {
                sold: true
            },
            orderBy: {
                price: 'asc'
            },
        })

        return { cars }
    }
}