/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TranscriptionWhereInput } from "./TranscriptionWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class TranscriptionCountArgs {
  @ApiProperty({
    required: false,
    type: () => TranscriptionWhereInput,
  })
  @Field(() => TranscriptionWhereInput, { nullable: true })
  @Type(() => TranscriptionWhereInput)
  where?: TranscriptionWhereInput;
}

export { TranscriptionCountArgs as TranscriptionCountArgs };
