import { PrismaClient } from "@prisma/client";

export default class Repository<T> {
  model: any;

  constructor(model: any) {
    this.model = model;
  }

  public async create(payload: T): Promise<T> {
    const record = await this.model.create({
      data: payload,
    });
    return record;
  }

  public async update(id: string, payload: T): Promise<T | null> {
    const record = await this.model.update({
      where: { id: id },
      data: payload,
    });
    return record;
  }

  public async delete(id: string): Promise<T | null> {
    const record = await this.model.delete({
      where: { id: id },
    });
    return record;
  }

  public async getById(id: string): Promise<T | null> {
    const record = await this.model.findUnique({
      where: { id: id },
    });
    return record;
  }
  public async getAll(): Promise<T[]> {
    const records = await this.model.findMany();
    return records;
  }
}
