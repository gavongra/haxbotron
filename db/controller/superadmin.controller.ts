import { Request, Response, NextFunction } from 'express';
import { SuperAdmin } from '../entity/superadmin.entity';
import { SuperAdminModel } from '../model/SuperAdminModel';
import { IRepository } from '../repository/repository.interface';

export class SuperAdminController {
    private readonly _repository: IRepository<SuperAdmin>;

    constructor(repository: IRepository<SuperAdmin>) {
        this._repository = repository;
    }

    public async getAllSuperAdmins(request: Request, response: Response, next: NextFunction): Promise<any> {
        if(request.query?.start && request.query?.count) {
            return this._repository
                .findAll(request.params.ruid, {start: parseInt(<string>request.query.start), count: parseInt(<string>request.query.count)})
                .then((superadmins) => response.status(200).send(superadmins))
                .catch((error) => response.status(404).send({ error: error.message }));
        } else {
            return this._repository
                .findAll(request.params.ruid)
                .then((superadmins) => response.status(200).send(superadmins))
                .catch((error) => response.status(404).send({ error: error.message }));
        }
    }

    public async getSuperAdmin(request: Request, response: Response, next: NextFunction): Promise<any> {
        return this._repository
            .findSingle(request.params.ruid, request.params.key)
            .then((superadmin) => response.status(200).send(superadmin))
            .catch((error) => response.status(404).send({ error: error.message }));
    }

    public async addSuperAdmin(request: Request, response: Response, next: NextFunction): Promise<any> {
        let superAdminModel: SuperAdminModel = request.body;

        return this._repository
            .addSingle(request.params.ruid, superAdminModel)
            .then(() => response.status(204).send())
            .catch((error) => response.status(400).send({ error: error.message }));
    }

    public async updateSuperAdmin(request: Request, response: Response, next: NextFunction): Promise<any> {
        let superAdminModel: SuperAdminModel = request.body;

        return this._repository
            .updateSingle(request.params.ruid, request.params.key, superAdminModel)
            .then(() => response.status(204).send())
            .catch((error) => response.status(404).send({ error: error.message }));
    }

    public async deleteSuperAdmin(request: Request, response: Response, next: NextFunction): Promise<any> {
        return this._repository
            .deleteSingle(request.params.ruid, request.params.key)
            .then(() => response.status(204).send())
            .catch((error) => response.status(404).send({ error: error.message }));
    }
}