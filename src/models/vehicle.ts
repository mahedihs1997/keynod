import { BuildOptions, DataTypes, Model } from 'sequelize';

import sequelize from '../db';
import Customer from './customer';

export class Vehicle extends Model {
  public model: string;
  public yearsUsed: number;

  // Generated
  public readonly id: string;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  // Foreign Keys
  public readonly customerId: string;
}

Vehicle.init(
  {
    model: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    yearsUsed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  { sequelize, modelName: 'vehicle' }
);

Vehicle.belongsTo(Customer);
Customer.hasMany(Vehicle, { onDelete: 'CASCADE' });

export type VehicleModelStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): Vehicle;
};

export default Vehicle as VehicleModelStatic;
