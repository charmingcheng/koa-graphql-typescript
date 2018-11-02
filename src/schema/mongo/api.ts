import {Entity, Column} from "typeorm";
import { BaseEntity } from './baseModel'

@Entity()
export class API extends BaseEntity{
  @Column()
  host: string

  @Column()
  path: string

  @Column()
  url: string

  @Column()
  params: string

  @Column()
  method: string

  @Column()
  origin: string

  @Column()
  hostname: string
  
  @Column()
  headers: string

  @Column()
  time: number

  @Column()
  protocol: string

  @Column()
  status: number
  
  @Column()
  msg: string
  
  @Column()
  client: string

}