import graphQlIcon from '@/assets/languages/graphql.svg';
import reactIcon from '@/assets/frontend/react.svg';
import reactNativeIcon from '@/assets/frontend/create-react-app.svg';
import typescriptIcon from '@/assets/languages/typescript-icon.svg';
import tailwindIcon from '@/assets/frontend/tailwindcss-icon.svg';
import framerIcon from '@/assets/frontend/framer.svg';
import htmlIcon from '@/assets/languages/html.svg';
import cssIcon from '@/assets/languages/css.svg';
import javascriptIcon from '@/assets/languages/javascript.svg';
import nextIcon from '@/assets/frontend/nextjs-icon.svg';
import reduxIcon from '@/assets/frontend/redux.svg';
import reactqueryIcon from '@/assets/frontend/react-query-icon.svg';
import cypress from '@/assets/frontend/cypress-icon.svg';

import redisIcon from '@/assets/backend/redis.svg';
import openapiIcon from '@/assets/backend/openapi-icon.svg';
import laravelIcon from '@/assets/backend/laravel.svg';
import slimIcon from '@/assets/backend/slim.svg';
import phpIcon from '@/assets/languages/php.svg';
import mysqlIcon from '@/assets/backend/mysql-icon.svg';
import dockerIcon from '@/assets/backend/docker-icon.svg';
import nestIcon from '@/assets/backend/nestjs.svg';
import postgresIcon from '@/assets/backend/postgresql.svg';
import prismaIcon from '@/assets/backend/prisma.svg';
import supabaseIcon from '@/assets/backend/supabase-icon.svg';
import phpUnitIcon from '@/assets/backend/phpunit.svg';
import jestIcon from '@/assets/backend/jest.svg';

const skills: {
  languages: Skill[];
  frontend: Skill[];
  backend: Skill[];
  database: Skill[];
} = {
  languages: [
    ['HTML', htmlIcon],
    ['CSS', cssIcon],
    ['JavaScript', javascriptIcon],
    ['TypeScript', typescriptIcon],
    ['PHP', phpIcon],
    ['SQL', mysqlIcon],
    ['GraphQL', graphQlIcon],
  ],
  frontend: [
    ['Tailwind', tailwindIcon],
    ['Framer Motion', framerIcon],
    ['NextJS', nextIcon],
    ['React', reactIcon],
    ['React Native', reactNativeIcon],
    ['Redux Toolkit', reduxIcon],
    ['React Query', reactqueryIcon],
    ['Cypress', cypress],
  ],
  backend: [
    ['Laravel', laravelIcon],
    ['SlimPHP', slimIcon],
    ['PHPUnit', phpUnitIcon],
    ['NestJS', nestIcon],
    ['Prisma', prismaIcon],
    ['Jest', jestIcon],
    ['Docker', dockerIcon],
    ['OpenAPI', openapiIcon],
  ],
  database: [
    ['MySQL', mysqlIcon],
    ['PostgreSQL', postgresIcon],
    ['Redis', redisIcon],
    ['Supabase', supabaseIcon],
  ],
};

export default skills;
