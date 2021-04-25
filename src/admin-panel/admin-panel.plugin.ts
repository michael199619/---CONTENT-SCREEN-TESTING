import { INestApplication } from '@nestjs/common';
import { Database, Resource } from 'admin-bro-typeorm';

import AdminBro from 'admin-bro';

import * as AdminBroExpress from 'admin-bro-expressjs';
import DomainResource from './resources/resource.resource';
import Domains from "./resources/domain.resource";

export async function setupAdminPanel(app: INestApplication): Promise<void> {
  AdminBro.registerAdapter({ Database, Resource });

  const adminBro = new AdminBro({
    resources: [Domains, DomainResource],
//     dashboard: {
//       component: AdminBro.bundle('./resources/templates/dashboard.tsx'),
//     },
    branding: {
      companyName: 'Monitoring',
    },

  });

  const router = AdminBroExpress.buildRouter(adminBro);
  app.use(adminBro.options.rootPath, router);
}
