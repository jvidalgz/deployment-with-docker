# Deployment With Docker
## chapter-6/redis-queue

```sh
$ # inicia Swarm
$ docker swarm init
$ # deploy stack y la nombra "queue_stack"
$ docker stack deploy -c swarm_application.yml queue_stack
$ # en este momento deberia existir algo de trafico
$ docker service logs queue_stack_queue-receiver
queue_stack_queue-receiver.1.rp9opu1uh1az@lmde-desktop    | Nuevo mensaje desde la queue con datos:  { key: '2018-09-06T14:20:26.639Z' }
queue_stack_queue-receiver.1.rp9opu1uh1az@lmde-desktop    | Nuevo mensaje desde la queue con datos:  { key: '2018-09-06T14:20:28.140Z' }
queue_stack_queue-receiver.1.rp9opu1uh1az@lmde-desktop    | Nuevo mensaje desde la queue con datos:  { key: '2018-09-06T14:20:29.642Z' }
queue_stack_queue-receiver.1.rp9opu1uh1az@lmde-desktop    | Nuevo mensaje desde la queue con datos:  { key: '2018-09-06T14:20:31.144Z' }
queue_stack_queue-receiver.1.rp9opu1uh1az@lmde-desktop    | Nuevo mensaje desde la queue con datos:  { key: '2018-09-06T14:20:32.646Z' }
$ # limpia
$ docker stack rm queue_stack
$ docker swarm leave --force
```
