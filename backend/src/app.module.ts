import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { FormModule } from './form/form.module';

@Module({
  imports: [ AuthModule, FormModule],

})
export class AppModule {}
