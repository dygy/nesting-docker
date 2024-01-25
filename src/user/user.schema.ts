import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'users', timestamps: true })
export class User {
  @Prop()
  fullName: string;

  @Prop()
  email: string;

  @Prop()
  bio: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
