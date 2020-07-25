import { Resolvers } from '../typings/generated';

const vehicleResolvers: Resolvers = {
  Query: {
    vehicles: async (_, args, context) => {
      const { models } = context;

      const vehicles = await models.Vehicle.findAll();

      return vehicles;
    },
    vehicle: async (_, args, context) => {
      const { id } = args;
      const { models } = context;
      return await models.Vehicle.findByPk(id);
    },
  },

  Mutation: {
    createVehicle: async (_, args, context) => {
      const { models } = context;
      const {
        input: { customerId, model, yearsUsed },
      } = args;

      const vehicle = await models.Vehicle.create({
        customerId,
        model,
        yearsUsed,
      });

      return vehicle;
    },
  },

  Vehicle: {
    customer: async (vehicle, _, context) => {
      const { loaders } = context;
      // @ts-ignore
      return await loaders.customer.load(vehicle.customerId);
    },
  },
};

export default vehicleResolvers;
