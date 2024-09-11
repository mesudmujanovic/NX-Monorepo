import { Route } from '@angular/router';
import { navigationConfig } from './navigation.config';

const appTitle: string = 'Agreement Management';

export const appRoutes: Route[] = [
    {
      path: '',
      loadComponent: () => import('@org/featureComponents').then((m) => m.MainNavComponent),
      data: {
        appTitle: appTitle,
        mainNavigation: navigationConfig
      },
      children: [
        {
          path: 'create',
          loadComponent: () => import('lib/featureComponents/src/lib/association/create/association.component').then(m => m.AssociationComponent)
        },
        {
          path: 'delete',
          loadComponent: () => import('lib/featureComponents/src/lib/association/delete/association-delete.component').then(m => m.AssociationDeleteComponent)
        }
      ]
    }
]

