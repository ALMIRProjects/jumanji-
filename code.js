var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["e73aafec-041c-4d5e-8c4d-1f8abf0a79f5","2acbc990-a16a-4d5e-87fd-61a3dda984b1","29f5af70-6353-4e5d-ae00-e24a375512b8","70456b96-5d3e-4f2e-b9af-2ee68f0fd36e","49814fa0-2137-48a0-ba8e-b94ae7756ba3","cd01fc8a-d310-4e3e-8703-9174d7c89863","4229e8ea-41d9-4fb3-a8b5-559b0e8cd7de","3e0b0171-bb46-44bd-8c85-bc1eb0f6a77a","45576050-7153-43b8-acc4-8846bf7f51bb","032c4d17-4315-4e97-90ed-9ff89d32ecb6","8125f56a-1e69-4d7b-8a14-04fc6204ceb7","577ff98e-b798-4d2b-9a92-9d6f904560c3","78c778dd-8980-401d-8751-992fed92b8d9","706f8ace-cf91-4eb8-afa6-6a22cf836e9d","009370e6-6b78-4882-8bcd-b840a984d3a2","5df043cd-4b82-435d-98e2-6a7ebda56254","27ab3eb8-5c2b-419e-b199-9d57e9e71127","c64bff3d-358e-4f66-b1fc-df72ba616699","18990738-425e-48a2-b1ec-804a46d1040f","f96e35d8-e72e-4717-8301-a5b48b39cf2a","f35a322d-2ca0-48f3-9e76-bb4337073ef0","20aead5b-cf91-48a3-b73b-1ec163d77645","30ce6b8a-c264-4f71-8c34-f7e2757f2964","cc5b12d0-8357-4fd0-b132-0a657e26d19a","5af67703-8a40-48a7-bb43-e1dd64c1a921","ebc71e47-23da-44da-960c-2878d99a30a1","07f7bcdf-a93b-4c9f-8110-08da47e2fba2","1deb18be-97bb-40e4-8c35-27df313192b7","80420765-cae3-45b7-b3d2-be0996773c41","abaf0137-34f2-4043-93af-31af0c20ebd9","6f9ef846-e38e-4315-8b4d-dd166d88fb2e","6651b0e7-d868-4a41-a226-1fb6b17ca9a8","e7d9c45b-1328-481c-a1ad-4d707dd58456","4ccd7314-e6b0-4932-b047-a59fc4cdc7f9","5fa0eba4-03a6-472f-9207-562a7f9650eb","ad1502f0-47a7-478d-958e-56424d639d12","7e669665-6efd-4cc8-bfc1-d0b2a54d7795","5d3d4cf3-bc4b-44a3-9666-09de3a968595","eef523bc-f475-4131-a8c2-8bc58f8d8e27","640abdb5-995e-4f67-87c3-f511dae100d6","872bbe3d-39e3-49c2-acb9-f070292ad23b","182a8013-0682-4485-9c03-c542ef89912b","70c68fc9-6702-4600-840f-dd5ffc29a0f0","c54445d3-13c3-47fa-927d-9833ccd7cde3","6eedca9a-32f5-4686-bbc6-dc73165b3626","8fbed314-cdf1-41d9-b80c-3ec681e5cb75"],"propsByKey":{"e73aafec-041c-4d5e-8c4d-1f8abf0a79f5":{"name":"Background1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":10,"version":"nvX6HVnRpQfKTN_0tOjGb5mb7IvSKv1r","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/e73aafec-041c-4d5e-8c4d-1f8abf0a79f5.png"},"2acbc990-a16a-4d5e-87fd-61a3dda984b1":{"name":"Background2","sourceUrl":"assets/v3/animations/YdCb0Jx4WJlmQDvs9nXm-tIEGL0b0LqwInkOTBfqXCk/2acbc990-a16a-4d5e-87fd-61a3dda984b1.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":4,"version":"YII.ki7ixa1IOnOdyd.p4Ao7.Yr7yTV6","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/v3/animations/YdCb0Jx4WJlmQDvs9nXm-tIEGL0b0LqwInkOTBfqXCk/2acbc990-a16a-4d5e-87fd-61a3dda984b1.png"},"29f5af70-6353-4e5d-ae00-e24a375512b8":{"name":"Background3","sourceUrl":"assets/v3/animations/YdCb0Jx4WJlmQDvs9nXm-tIEGL0b0LqwInkOTBfqXCk/29f5af70-6353-4e5d-ae00-e24a375512b8.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":4,"version":"jRKT0bpC8uoL6xf96Cdg7HO5IykzX6t.","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/v3/animations/YdCb0Jx4WJlmQDvs9nXm-tIEGL0b0LqwInkOTBfqXCk/29f5af70-6353-4e5d-ae00-e24a375512b8.png"},"70456b96-5d3e-4f2e-b9af-2ee68f0fd36e":{"name":"Ground1","sourceUrl":null,"frameSize":{"x":400,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"noe.9WuQmsfdsRWUMelbZl6HfmkBFxXI","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":100},"rootRelativePath":"assets/70456b96-5d3e-4f2e-b9af-2ee68f0fd36e.png"},"49814fa0-2137-48a0-ba8e-b94ae7756ba3":{"name":"groundLine","sourceUrl":null,"frameSize":{"x":500,"y":2},"frameCount":1,"looping":true,"frameDelay":12,"version":"l.EPF339hUfWMgla6sQVTc7tjcHBxb83","loadedFromSource":true,"saved":true,"sourceSize":{"x":500,"y":2},"rootRelativePath":"assets/49814fa0-2137-48a0-ba8e-b94ae7756ba3.png"},"cd01fc8a-d310-4e3e-8703-9174d7c89863":{"name":"Spike1","sourceUrl":null,"frameSize":{"x":94,"y":90},"frameCount":1,"looping":true,"frameDelay":12,"version":"K.WEJoYz89oH65KkFWjKmlqaC7sGcy4A","loadedFromSource":true,"saved":true,"sourceSize":{"x":94,"y":90},"rootRelativePath":"assets/cd01fc8a-d310-4e3e-8703-9174d7c89863.png"},"4229e8ea-41d9-4fb3-a8b5-559b0e8cd7de":{"name":"Spike2","sourceUrl":null,"frameSize":{"x":200,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"I2hJyUsyaBv7Vc6CrxZzpQ62J9KaiNIB","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":100},"rootRelativePath":"assets/4229e8ea-41d9-4fb3-a8b5-559b0e8cd7de.png"},"3e0b0171-bb46-44bd-8c85-bc1eb0f6a77a":{"name":"respawnCircle","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":3,"looping":true,"frameDelay":12,"version":"LpxvD1f_2Lwl.jxCkDCMz4v2QZTqwTqx","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/3e0b0171-bb46-44bd-8c85-bc1eb0f6a77a.png"},"45576050-7153-43b8-acc4-8846bf7f51bb":{"name":"effectCircleOpen","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"EuuPMTg5wXwFa__.uIvoRwL1j1w08hEA","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/45576050-7153-43b8-acc4-8846bf7f51bb.png"},"032c4d17-4315-4e97-90ed-9ff89d32ecb6":{"name":"jumpRing","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"VJebj0vqLD4eYCkE4IJX5cdXc1TMvPH5","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/032c4d17-4315-4e97-90ed-9ff89d32ecb6.png"},"8125f56a-1e69-4d7b-8a14-04fc6204ceb7":{"name":"jumpPad","sourceUrl":null,"frameSize":{"x":100,"y":23},"frameCount":1,"looping":true,"frameDelay":12,"version":"q7djpHxT8wQceGbMXl4MnECTtPWkr9fk","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":23},"rootRelativePath":"assets/8125f56a-1e69-4d7b-8a14-04fc6204ceb7.png"},"577ff98e-b798-4d2b-9a92-9d6f904560c3":{"name":"miniPortal","sourceUrl":"assets/v3/animations/YdCb0Jx4WJlmQDvs9nXm-tIEGL0b0LqwInkOTBfqXCk/577ff98e-b798-4d2b-9a92-9d6f904560c3.png","frameSize":{"x":60,"y":115},"frameCount":1,"looping":true,"frameDelay":4,"version":"8kjOMjZ.pUbw1ge3LJ19I__j64M0XGf5","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":115},"rootRelativePath":"assets/v3/animations/YdCb0Jx4WJlmQDvs9nXm-tIEGL0b0LqwInkOTBfqXCk/577ff98e-b798-4d2b-9a92-9d6f904560c3.png"},"78c778dd-8980-401d-8751-992fed92b8d9":{"name":"bigPortal","sourceUrl":"assets/v3/animations/YdCb0Jx4WJlmQDvs9nXm-tIEGL0b0LqwInkOTBfqXCk/78c778dd-8980-401d-8751-992fed92b8d9.png","frameSize":{"x":60,"y":115},"frameCount":1,"looping":true,"frameDelay":4,"version":"Z1gWlLonuSPTx9iUkAjizz9ifi.D8iLB","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":115},"rootRelativePath":"assets/v3/animations/YdCb0Jx4WJlmQDvs9nXm-tIEGL0b0LqwInkOTBfqXCk/78c778dd-8980-401d-8751-992fed92b8d9.png"},"706f8ace-cf91-4eb8-afa6-6a22cf836e9d":{"name":"slowSpeed","sourceUrl":null,"frameSize":{"x":138,"y":174},"frameCount":1,"looping":true,"frameDelay":12,"version":"IfZ9n0I9UBSgv_26fcqdVGxtN3StVzLA","loadedFromSource":true,"saved":true,"sourceSize":{"x":138,"y":174},"rootRelativePath":"assets/706f8ace-cf91-4eb8-afa6-6a22cf836e9d.png"},"009370e6-6b78-4882-8bcd-b840a984d3a2":{"name":"normalSpeed","sourceUrl":null,"frameSize":{"x":130,"y":224},"frameCount":1,"looping":true,"frameDelay":12,"version":"tCZLQlUIayPH1IKmfnx7BUs..d3PgwUc","loadedFromSource":true,"saved":true,"sourceSize":{"x":130,"y":224},"rootRelativePath":"assets/009370e6-6b78-4882-8bcd-b840a984d3a2.png"},"5df043cd-4b82-435d-98e2-6a7ebda56254":{"name":"fastSpeed","sourceUrl":null,"frameSize":{"x":202,"y":224},"frameCount":1,"looping":true,"frameDelay":12,"version":"mImhy1ChYTo5PTVAG3ZbeXHlp8QC.R5T","loadedFromSource":true,"saved":true,"sourceSize":{"x":202,"y":224},"rootRelativePath":"assets/5df043cd-4b82-435d-98e2-6a7ebda56254.png"},"27ab3eb8-5c2b-419e-b199-9d57e9e71127":{"name":"fasterSpeed","sourceUrl":null,"frameSize":{"x":258,"y":224},"frameCount":1,"looping":true,"frameDelay":12,"version":"iVd8ho0TgNGTdaiEDkwgis5D8VqFf70E","loadedFromSource":true,"saved":true,"sourceSize":{"x":258,"y":224},"rootRelativePath":"assets/27ab3eb8-5c2b-419e-b199-9d57e9e71127.png"},"c64bff3d-358e-4f66-b1fc-df72ba616699":{"name":"yellowPortal","sourceUrl":null,"frameSize":{"x":152,"y":306},"frameCount":1,"looping":true,"frameDelay":12,"version":"3HO9RTbAo8OYQSvTPNG.9HVafgxEgKB4","loadedFromSource":true,"saved":true,"sourceSize":{"x":152,"y":306},"rootRelativePath":"assets/c64bff3d-358e-4f66-b1fc-df72ba616699.png"},"18990738-425e-48a2-b1ec-804a46d1040f":{"name":"bluePortal","sourceUrl":null,"frameSize":{"x":142,"y":286},"frameCount":1,"looping":true,"frameDelay":12,"version":"DHCbJ.9xxh3ZUY0L0U8.UKIX4ZsplbYI","loadedFromSource":true,"saved":true,"sourceSize":{"x":142,"y":286},"rootRelativePath":"assets/18990738-425e-48a2-b1ec-804a46d1040f.png"},"f96e35d8-e72e-4717-8301-a5b48b39cf2a":{"name":"checkpointInactive","sourceUrl":null,"frameSize":{"x":182,"y":159},"frameCount":1,"looping":true,"frameDelay":12,"version":".8uwU.CQ29goeyt_AowFSarP_ZHlKvUk","loadedFromSource":true,"saved":true,"sourceSize":{"x":182,"y":159},"rootRelativePath":"assets/f96e35d8-e72e-4717-8301-a5b48b39cf2a.png"},"f35a322d-2ca0-48f3-9e76-bb4337073ef0":{"name":"checkpointActive","sourceUrl":null,"frameSize":{"x":182,"y":159},"frameCount":2,"looping":true,"frameDelay":12,"version":"ypf_2Hb1YHkoRmoskjpV6Em6oopno1W4","loadedFromSource":true,"saved":true,"sourceSize":{"x":182,"y":318},"rootRelativePath":"assets/f35a322d-2ca0-48f3-9e76-bb4337073ef0.png"},"20aead5b-cf91-48a3-b73b-1ec163d77645":{"name":"BlockTemplate","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"viGdPaxsZ_AxlJD3iNsttMn_qx7Zjznd","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/20aead5b-cf91-48a3-b73b-1ec163d77645.png"},"30ce6b8a-c264-4f71-8c34-f7e2757f2964":{"name":"finishLine","sourceUrl":null,"frameSize":{"x":100,"y":999},"frameCount":1,"looping":true,"frameDelay":12,"version":"x_LCk47VNZ0K5XWsYS72gufvqSgxf7ZO","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":999},"rootRelativePath":"assets/30ce6b8a-c264-4f71-8c34-f7e2757f2964.png"},"cc5b12d0-8357-4fd0-b132-0a657e26d19a":{"name":"2x5_collision","sourceUrl":null,"frameSize":{"x":210,"y":500},"frameCount":1,"looping":true,"frameDelay":12,"version":"nXdHrVcGGrDgeBIzxwH7lfF7WFXzyi3n","loadedFromSource":true,"saved":true,"sourceSize":{"x":210,"y":500},"rootRelativePath":"assets/cc5b12d0-8357-4fd0-b132-0a657e26d19a.png"},"5af67703-8a40-48a7-bb43-e1dd64c1a921":{"name":"5x5","sourceUrl":null,"frameSize":{"x":500,"y":500},"frameCount":1,"looping":true,"frameDelay":12,"version":"iewLvnQxA9ZeU59gYVrH3phYbQAjq9Dc","loadedFromSource":true,"saved":true,"sourceSize":{"x":500,"y":500},"rootRelativePath":"assets/5af67703-8a40-48a7-bb43-e1dd64c1a921.png"},"ebc71e47-23da-44da-960c-2878d99a30a1":{"name":"5x5_collision","sourceUrl":null,"frameSize":{"x":500,"y":510},"frameCount":1,"looping":true,"frameDelay":12,"version":"aeocXRTDFSgaLqC8IIAcq81t9XZ0wkqt","loadedFromSource":true,"saved":true,"sourceSize":{"x":500,"y":510},"rootRelativePath":"assets/ebc71e47-23da-44da-960c-2878d99a30a1.png"},"07f7bcdf-a93b-4c9f-8110-08da47e2fba2":{"name":"1x2","sourceUrl":null,"frameSize":{"x":100,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"HiC4xD5TKIcnpz6bocDLM1sQ38k_MR.i","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/07f7bcdf-a93b-4c9f-8110-08da47e2fba2.png"},"1deb18be-97bb-40e4-8c35-27df313192b7":{"name":"1x2_collision","sourceUrl":null,"frameSize":{"x":110,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"FVxPLIIK0ovN_7MXs5mqb2RiWVeJMy31","loadedFromSource":true,"saved":true,"sourceSize":{"x":110,"y":200},"rootRelativePath":"assets/1deb18be-97bb-40e4-8c35-27df313192b7.png"},"80420765-cae3-45b7-b3d2-be0996773c41":{"name":"1x5","sourceUrl":null,"frameSize":{"x":100,"y":500},"frameCount":1,"looping":true,"frameDelay":12,"version":"qFXrnJ4Mtufq_xszATDihBz1YVOeXcMX","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":500},"rootRelativePath":"assets/80420765-cae3-45b7-b3d2-be0996773c41.png"},"abaf0137-34f2-4043-93af-31af0c20ebd9":{"name":"1x5_collision","sourceUrl":null,"frameSize":{"x":110,"y":500},"frameCount":1,"looping":true,"frameDelay":12,"version":"03lQM7xFGNgx6oS751VlCz0ohDL9tv6T","loadedFromSource":true,"saved":true,"sourceSize":{"x":110,"y":500},"rootRelativePath":"assets/abaf0137-34f2-4043-93af-31af0c20ebd9.png"},"6f9ef846-e38e-4315-8b4d-dd166d88fb2e":{"name":"arrowKeysMove","sourceUrl":null,"frameSize":{"x":300,"y":200},"frameCount":2,"looping":true,"frameDelay":12,"version":"kQ4AUoyepyuUABOkvmnkbiKLrjTNAfAY","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":400},"rootRelativePath":"assets/6f9ef846-e38e-4315-8b4d-dd166d88fb2e.png"},"6651b0e7-d868-4a41-a226-1fb6b17ca9a8":{"name":"arrowKeysJump","sourceUrl":null,"frameSize":{"x":300,"y":200},"frameCount":2,"looping":true,"frameDelay":12,"version":"FwZhquplIPt9aiVQzinjqKnvvgEzjhuO","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":400},"rootRelativePath":"assets/6651b0e7-d868-4a41-a226-1fb6b17ca9a8.png"},"e7d9c45b-1328-481c-a1ad-4d707dd58456":{"name":"platform_1","sourceUrl":null,"frameSize":{"x":100,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"N5KDWKOc_B4O1whTKXVjYD.6ou2Y07BO","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":50},"rootRelativePath":"assets/e7d9c45b-1328-481c-a1ad-4d707dd58456.png"},"4ccd7314-e6b0-4932-b047-a59fc4cdc7f9":{"name":"platform_1_collision","sourceUrl":null,"frameSize":{"x":110,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":".UvB7q5m7jj9W4Tu9AmREzwH5Oi_nGlD","loadedFromSource":true,"saved":true,"sourceSize":{"x":110,"y":50},"rootRelativePath":"assets/4ccd7314-e6b0-4932-b047-a59fc4cdc7f9.png"},"5fa0eba4-03a6-472f-9207-562a7f9650eb":{"name":"moveParticle","sourceUrl":null,"frameSize":{"x":10,"y":10},"frameCount":1,"looping":true,"frameDelay":10,"version":"ohTQYRv..4EFdOCqsGe9HOzMXraPxac0","loadedFromSource":true,"saved":true,"sourceSize":{"x":10,"y":10},"rootRelativePath":"assets/5fa0eba4-03a6-472f-9207-562a7f9650eb.png"},"ad1502f0-47a7-478d-958e-56424d639d12":{"name":"download (1).jpg_1","sourceUrl":"assets/v3/animations/VbjXKxhDzA8__nrgQ5c5qTU_eDn4xgR-Dd1W9Q1YIJw/ad1502f0-47a7-478d-958e-56424d639d12.png","frameSize":{"x":201,"y":251},"frameCount":1,"looping":true,"frameDelay":4,"version":"nlkydRjg5YR7toIIDZLEJ6vBNJ_4yZCS","loadedFromSource":true,"saved":true,"sourceSize":{"x":201,"y":251},"rootRelativePath":"assets/v3/animations/VbjXKxhDzA8__nrgQ5c5qTU_eDn4xgR-Dd1W9Q1YIJw/ad1502f0-47a7-478d-958e-56424d639d12.png"},"7e669665-6efd-4cc8-bfc1-d0b2a54d7795":{"name":"download (3).jpg_1","sourceUrl":"assets/v3/animations/VbjXKxhDzA8__nrgQ5c5qTU_eDn4xgR-Dd1W9Q1YIJw/7e669665-6efd-4cc8-bfc1-d0b2a54d7795.png","frameSize":{"x":184,"y":273},"frameCount":1,"looping":true,"frameDelay":4,"version":"k5MPoL2VvjkG5GKREljs4YZd7mwU8uFh","loadedFromSource":true,"saved":true,"sourceSize":{"x":184,"y":273},"rootRelativePath":"assets/v3/animations/VbjXKxhDzA8__nrgQ5c5qTU_eDn4xgR-Dd1W9Q1YIJw/7e669665-6efd-4cc8-bfc1-d0b2a54d7795.png"},"5d3d4cf3-bc4b-44a3-9666-09de3a968595":{"name":"download.jpg_1","sourceUrl":"assets/v3/animations/VbjXKxhDzA8__nrgQ5c5qTU_eDn4xgR-Dd1W9Q1YIJw/5d3d4cf3-bc4b-44a3-9666-09de3a968595.png","frameSize":{"x":184,"y":273},"frameCount":1,"looping":true,"frameDelay":4,"version":"J.WHPUJm.TQpHzuqF_ypqdJDMhi4cim6","loadedFromSource":true,"saved":true,"sourceSize":{"x":184,"y":273},"rootRelativePath":"assets/v3/animations/VbjXKxhDzA8__nrgQ5c5qTU_eDn4xgR-Dd1W9Q1YIJw/5d3d4cf3-bc4b-44a3-9666-09de3a968595.png"},"eef523bc-f475-4131-a8c2-8bc58f8d8e27":{"name":"maxresdefault.jpg_1","sourceUrl":"assets/v3/animations/VbjXKxhDzA8__nrgQ5c5qTU_eDn4xgR-Dd1W9Q1YIJw/eef523bc-f475-4131-a8c2-8bc58f8d8e27.png","frameSize":{"x":1280,"y":720},"frameCount":1,"looping":true,"frameDelay":4,"version":"_5xNMF61WNEWhMN7K_Vtke1fbYSSg8AA","loadedFromSource":true,"saved":true,"sourceSize":{"x":1280,"y":720},"rootRelativePath":"assets/v3/animations/VbjXKxhDzA8__nrgQ5c5qTU_eDn4xgR-Dd1W9Q1YIJw/eef523bc-f475-4131-a8c2-8bc58f8d8e27.png"},"640abdb5-995e-4f67-87c3-f511dae100d6":{"name":"2x5","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"nvkXo0wvAV4P2ZHeKdBi4fFcmkfMNhMp","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/640abdb5-995e-4f67-87c3-f511dae100d6.png"},"872bbe3d-39e3-49c2-acb9-f070292ad23b":{"name":"Cube_left","sourceUrl":null,"frameSize":{"x":146,"y":138},"frameCount":2,"looping":true,"frameDelay":12,"version":"kE6wGGdl1jtw4iGc_d13uocL_80ltFuM","loadedFromSource":true,"saved":true,"sourceSize":{"x":146,"y":276},"rootRelativePath":"assets/872bbe3d-39e3-49c2-acb9-f070292ad23b.png"},"182a8013-0682-4485-9c03-c542ef89912b":{"name":"U_Cube_left","sourceUrl":null,"frameSize":{"x":146,"y":138},"frameCount":2,"looping":true,"frameDelay":12,"version":"nZiWr1gCPUljdSBYTZu5ANiudbyPalUF","loadedFromSource":true,"saved":true,"sourceSize":{"x":146,"y":276},"rootRelativePath":"assets/182a8013-0682-4485-9c03-c542ef89912b.png"},"70c68fc9-6702-4600-840f-dd5ffc29a0f0":{"name":"Cube_right","sourceUrl":null,"frameSize":{"x":146,"y":138},"frameCount":2,"looping":true,"frameDelay":12,"version":"Xf7BHAGblQ3BaZdXo6U0W0uQ46_8qyFS","loadedFromSource":true,"saved":true,"sourceSize":{"x":146,"y":276},"rootRelativePath":"assets/70c68fc9-6702-4600-840f-dd5ffc29a0f0.png"},"c54445d3-13c3-47fa-927d-9833ccd7cde3":{"name":"Cube_idle","sourceUrl":null,"frameSize":{"x":146,"y":138},"frameCount":2,"looping":true,"frameDelay":12,"version":"oQUaEdXI1EG2qRC5KOoaYhoWo4c1taCE","loadedFromSource":true,"saved":true,"sourceSize":{"x":146,"y":276},"rootRelativePath":"assets/c54445d3-13c3-47fa-927d-9833ccd7cde3.png"},"6eedca9a-32f5-4686-bbc6-dc73165b3626":{"name":"U_Cube_right","sourceUrl":null,"frameSize":{"x":146,"y":138},"frameCount":2,"looping":true,"frameDelay":12,"version":"wSsBhI9a1hyYdm_yiXAQOTzxBURpcPpY","loadedFromSource":true,"saved":true,"sourceSize":{"x":146,"y":276},"rootRelativePath":"assets/6eedca9a-32f5-4686-bbc6-dc73165b3626.png"},"8fbed314-cdf1-41d9-b80c-3ec681e5cb75":{"name":"U_Cube_idle","sourceUrl":null,"frameSize":{"x":146,"y":138},"frameCount":2,"looping":true,"frameDelay":12,"version":"SsRaR12G9xFePW5frgyoth_0ALFsZWvL","loadedFromSource":true,"saved":true,"sourceSize":{"x":146,"y":276},"rootRelativePath":"assets/8fbed314-cdf1-41d9-b80c-3ec681e5cb75.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

 //                          
playSound("assets/GunsAndRoses-WelcomeToTheJungle.mp3", true);

var currentCheckpoint = 0;
var currentGravity = 0;
var currentSize = 5;
var speedMultiplier = 1.9; //3.9
//
//
var respawnTimer = 1;
//var globalTimer = 0;
var lastDirection = 0;
camera.zoom = 0.4;//0.4
var maxRespawn = 75;
var debugCollision = 0;

var timeTaken = 0;
var timeEnable = 1;
var deathCount = 0;



// BACKGROUND
var backgroundObj = createSprite(200,-950);
backgroundObj.setAnimation("Background1");
backgroundObj.scale = 4;
backgroundObj.tint = "rgb(100, 150, 235)";

var backgroundObj2 = createSprite(1800,-950);
backgroundObj2.setAnimation("Background1");
backgroundObj2.scale = 4;
backgroundObj2.tint = "rgb(100, 150, 235)";

// CHECKPOINT

var checkpoints = createGroup();

var checkpoint_1 = createSprite(4399, -250);
checkpoints.add(checkpoint_1);

var checkpoint_2 = createSprite(11000, -250);
checkpoints.add(checkpoint_2);

var checkpoint_3 = createSprite(15750, -250);
checkpoints.add(checkpoint_3);

var checkpoint_4 = createSprite(21500, -250);
checkpoints.add(checkpoint_4);

var checkpoint_5 = createSprite(30600, -250);
checkpoints.add(checkpoint_5);

checkpoints.setAnimationEach("checkpointInactive");
checkpoints.setScaleEach(1.25);

// RESPAWN CIRCLE
var respawnCircle = createSprite(200,-200);
respawnCircle.setAnimation("respawnCircle");
respawnCircle.scale = 0.0;
respawnCircle.rotationSpeed = 50;
respawnCircle.tint = "rgb(0, 240, 255)";

// EFFECT CIRCLES
var effectCircle = createSprite(200, -200);
effectCircle.setAnimation("respawnCircle");
effectCircle.scale = 0.0;

var effectCircle2 = createSprite(200, -200);
effectCircle2.setAnimation("effectCircleOpen");
effectCircle2.scale = 0.0;

// JUMP RING
//var jumpRing_1 = createSprite(2600, -400);

var jumpRings = createGroup();
jumpRings.add(createSprite(11750, -350));
jumpRings.add(createSprite(13400, -780));
jumpRings.add(createSprite(15100, -400));

jumpRings.add(createSprite(19600, -650));
jumpRings.add(createSprite(26200, -700));
jumpRings.add(createSprite(26900, -700));
jumpRings.add(createSprite(27200, -600));

jumpRings.add(createSprite(28300, -1000));
jumpRings.add(createSprite(28500, -875));
jumpRings.add(createSprite(28700, -750));

jumpRings.add(createSprite(34600, -400));
jumpRings.add(createSprite(35700, -600));

jumpRings.add(createSprite(37075, -400));
jumpRings.add(createSprite(36925, -550));
jumpRings.add(createSprite(37075, -700));
jumpRings.add(createSprite(36925, -850));
jumpRings.add(createSprite(37075, -1000));
jumpRings.add(createSprite(36925, -1150));
jumpRings.add(createSprite(37075, -1300));


jumpRings.setAnimationEach("jumpRing");
jumpRings.setScaleEach(1.1);

// JUMP PADS
//var jumpPad_1 = createSprite(2400, -160);

var jumpPads = createGroup();
jumpPads.add(createSprite(5000, -160));
jumpPads.add(createSprite(8600, -460));
jumpPads.add(createSprite(9900, -160));
jumpPads.add(createSprite(10400, -160));

jumpPads.add(createSprite(12900, -160));

jumpPads.add(createSprite(23700, -160));
jumpPads.add(createSprite(24900, -560));
var jumpPad1 = createSprite(25900, -840);
jumpPads.add(jumpPad1);
jumpPad1.rotation = 180;

jumpPads.add(createSprite(33400, -160));

jumpPads.add(createSprite(37000, -160));
jumpPads.setAnimationEach("jumpPad");

// SPEED PORTALS
//SLOW SPEED
//var speed0_1 = createSprite(3200, -300);
var speed0 = createGroup();
speed0.add(createSprite(39800, -300));
speed0.setAnimationEach("slowSpeed");
speed0.setScaleEach(0.8);

//1x SPEED (NORMAL)
//var speed1_1 = createSprite(4300, -300);
var speed1 = createGroup();
speed1.add(createSprite(42000, -300));
speed1.setAnimationEach("normalSpeed");
speed1.setScaleEach(0.8);

//2x SPEED
//var speed2_1 = createSprite(3800, -300);
var speed2 = createGroup();
speed2.add(createSprite(31300, -400));
speed2.setAnimationEach("fastSpeed");
speed2.setScaleEach(0.8);

//3x SPEED
//var speed3_1 = createSprite(4100, -300);
var speed3 = createGroup();
speed3.add(createSprite(38100, -600));
speed3.setAnimationEach("fasterSpeed");
speed3.setScaleEach(0.8);


/////////////////////////////////////////////////////////////////////////
// PLAYER
var player = createSprite(-10,-200);
player.scale=0.3
player.setAnimation("Cube_idle");


// MINI PORTALS /////////////////////////////////////////////////////////

var miniPortals = createGroup();


miniPortals.add(createSprite(36000, -800));

miniPortals.setAnimationEach("miniPortal");
miniPortals.setScaleEach(2);

// BIG PORTALS 

var bigPortals = createGroup();
var bigPortal1 = createSprite(28550, -375);
bigPortals.add(bigPortal1);
bigPortal1.rotation = 180;
bigPortal1.scale = 1.1;

bigPortals.add(createSprite(38100, -600));

bigPortals.setAnimationEach("bigPortal");
bigPortals.setScaleEach(2.2);

/////////////////////////////////////////////////////////////////////////
// GRAVITY PORTALS
var bluePortals = createGroup();


var bluePortal1 = createSprite(20450, -400);
bluePortals.add(bluePortal1);

var bluePortal2 = createSprite(27400, -800);
bluePortals.add(bluePortal2);
bluePortal2.rotation = -45;

var bluePortal3 = createSprite(27700, -500);
bluePortals.add(bluePortal3);
bluePortal3.rotation = -45;

bluePortals.add(createSprite(29000, -600));

bluePortals.add(createSprite(38600, -500));

bluePortals.setAnimationEach("bluePortal");
bluePortals.setScaleEach(0.8);

var yellowPortals = createGroup();

var yellowPortal1 = createSprite(17500, -400);
yellowPortals.add(yellowPortal1);
yellowPortal1.rotation = 90;

var yellowPortal2 = createSprite(25300, -575);
yellowPortals.add(yellowPortal2);
yellowPortal2.rotation = 90;
yellowPortal2.scale = 0.9;

var yellowPortal3 = createSprite(37600, -700);
yellowPortals.add(yellowPortal3);
yellowPortal3.rotation = 90;

yellowPortals.setAnimationEach("yellowPortal");
yellowPortals.setScaleEach(0.8);


/////////////////////////////////////////////////////////////////////////

// BLOCK LIST
// GROUPS
var block = createGroup();
var blockCollision = createGroup();

// Creating Sprites
var block1 = createSprite(2900,-200);
block1.setAnimation("1x5");
block.add(block1);
block1.rotation = 90;
var block1C = createSprite(2900,-192);
block1C.scale = 1.02;
block1C.setAnimation("1x5_collision");
blockCollision.add(block1C);
block1C.rotation = 90;

var block2 = createSprite(3800, -600);
block2.setAnimation("1x2");
block.add(block2);
var block2C = createSprite(3800,-597);
block2C.scale = 1.02;
block2C.setAnimation("1x2_collision");
block2C.width = 120;
blockCollision.add(block2C);

var block3 = createSprite(3800,-100);
block3.setAnimation("1x5");
block.add(block3);
var block3C = createSprite(3800,-95);
block3C.scale = 1.02;
block3C.setAnimation("1x5_collision");
blockCollision.add(block3C);

var block4 = createSprite(2850, -800);
block4.setAnimation("1x2");
block.add(block4);
block4.rotation = 90;
var block4C = createSprite(2850,-799);
block4C.scale = 1.05;
block4C.setAnimation("1x2_collision");
block4C.width = 120;
blockCollision.add(block4C);
block4C.rotation = 90;

var block5 = createSprite(6800, 0);
block5.setAnimation("5x5");
block.add(block5);
var block5C = createSprite(6800, 12);
block5C.scale = 1.02;
block5C.setAnimation("5x5_collision");
blockCollision.add(block5C);

var block6 = createSprite(7500, -100);
block6.setAnimation("5x5");
block.add(block6);
var block6C = createSprite(7500, -88);
block6C.scale = 1.02;
block6C.setAnimation("5x5_collision");
blockCollision.add(block6C);

var block7 = createSprite(8000, -445);
block7.setAnimation("platform_1");
block.add(block7);
var block7C = createSprite(8000, -440);
block7C.scale = 1.02;
block7C.setAnimation("platform_1_collision");
blockCollision.add(block7C);

var block8 = createSprite(8300, -545);
block8.setAnimation("platform_1");
block.add(block8);
var block8C = createSprite(8300, -540);
block8C.scale = 1.02;
block8C.setAnimation("platform_1_collision");
blockCollision.add(block8C);

var block9 = createSprite(8600, -200);
block9.setAnimation("1x5");
block.add(block9);
var block9C = createSprite(8600, -195);
block9C.scale = 1.02;
block9C.setAnimation("1x5_collision");
blockCollision.add(block9C);

var block10 = createSprite(6800, -800);
block10.setAnimation("1x2");
block.add(block10);
block10.rotation = 90;
var block10C = createSprite(6800,-799);
block10C.scale = 1.05;
block10C.setAnimation("1x2_collision");
block10C.width = 120;
blockCollision.add(block10C);
block10C.rotation = 90;

var block11 = createSprite(5950, -700);
block11.setAnimation("1x2");
block.add(block11);
block11.rotation = 90;
var block11C = createSprite(5950,-699);
block11C.scale = 1.05;
block11C.setAnimation("1x2_collision");
block11C.width = 120;
blockCollision.add(block11C);
block11C.rotation = 90;

var block12 = createSprite(7500, -900);
block12.setAnimation("1x2");
block.add(block12);
block12.rotation = 90;
var block12C = createSprite(7500,-899);
block12C.scale = 1.05;
block12C.setAnimation("1x2_collision");
block12C.width = 120;
blockCollision.add(block12C);
block12C.rotation = 90;

var block13 = createSprite(9900,-650);
block13.setAnimation("1x5");
block.add(block13);
block13.rotation = 90;
var block13C = createSprite(9900,-650);
block13C.scale = 1.02;
block13C.setAnimation("1x5_collision");
blockCollision.add(block13C);
block13C.rotation = 90;

var block14 = createSprite(10400,-650);
block14.setAnimation("1x5");
block.add(block14);
block14.rotation = 90;
var block14C = createSprite(10400,-650);
block14C.scale = 1.02;
block14C.setAnimation("1x5_collision");
blockCollision.add(block14C);
block14C.rotation = 90;

var block15 = createSprite(8300, -545);
block15.setAnimation("platform_1");
block.add(block15);
var block15C = createSprite(8300, -540);
block15C.scale = 1.02;
block15C.setAnimation("platform_1_collision");
blockCollision.add(block15C);

var block16 = createSprite(13200,-270);
block16.setAnimation("1x5");
block.add(block16);
var block16C = createSprite(13200,-250);
block16C.scale = 1.05;
block16C.setAnimation("1x5_collision");
blockCollision.add(block16C);

var block17 = createSprite(13550,-314);
block17.setAnimation("2x5");
block.add(block17);
var block17C = createSprite(13550,-300);
block17C.scale = 1.05;
block17C.setAnimation("2x5_collision");
blockCollision.add(block17C);

var block18 = createSprite(14000,-400);
block18.setAnimation("1x5");
block.add(block18);
block18.rotation = 90;
var block18C = createSprite(14000,-380);
block18C.scale = 1.02;
block18C.setAnimation("1x5_collision");
blockCollision.add(block18C);
block18C.rotation = 90;

var block19 = createSprite(14400,-270);
block19.setAnimation("1x5");
block.add(block19);
var block19C = createSprite(14400,-250);
block19C.scale = 1.05;
block19C.setAnimation("1x5_collision");
blockCollision.add(block19C);

var block20 = createSprite(15100,-675);
block20.setAnimation("1x5");
block.add(block20);
block20.rotation = 90;
var block20C = createSprite(15100,-675);
block20C.scale = 1.04;
block20C.setAnimation("1x5_collision");
blockCollision.add(block20C);
block20C.rotation = 90;

var block21 = createSprite(16500, -100);
block21.setAnimation("1x5");
block.add(block21);
var block21C = createSprite(16500, -70);
block21C.scale = 1.1;
block21C.setAnimation("1x5_collision");
blockCollision.add(block21C);

var block22 = createSprite(17000, -200);
block22.setAnimation("5x5");
block.add(block22);
var block22C = createSprite(17000, -167);
block22C.scale = 1.06;
block22C.setAnimation("5x5_collision");
blockCollision.add(block22C);

var block23 = createSprite(16950, -900);
block23.setAnimation("1x2");
block.add(block23);
block23.rotation = 90;
var block23C = createSprite(16950,-899);
block23C.scale = 1.05;
block23C.setAnimation("1x2_collision");
block23C.width = 120;
blockCollision.add(block23C);
block23C.rotation = 90;

var block24 = createSprite(17900, -800);
block24.setAnimation("1x5");
block.add(block24);
block24.rotation = 90;
var block24C = createSprite(17900, -815);
block24C.scale = 1.1;
block24C.setAnimation("1x5_collision");
blockCollision.add(block24C);
block24C.rotation = 90;

var block25 = createSprite(18400, -800);
block25.setAnimation("1x5");
block.add(block25);
block25.rotation = 90;
var block25C = createSprite(18400, -815);
block25C.scale = 1.1;
block25C.setAnimation("1x5_collision");
blockCollision.add(block25C);
block25C.rotation = 90;

var block26 = createSprite(19100, -700);
block26.setAnimation("1x5");
block.add(block26);
block26.rotation = 90;
var block26C = createSprite(19100, -715);
block26C.scale = 1.1;
block26C.setAnimation("1x5_collision");
blockCollision.add(block26C);
block26C.rotation = 90;

var block27 = createSprite(20100, -700);
block27.setAnimation("1x5");
block.add(block27);
block27.rotation = 90;
var block27C = createSprite(20100, -715);
block27C.scale = 1.1;
block27C.setAnimation("1x5_collision");
blockCollision.add(block27C);
block27C.rotation = 90;

var block28 = createSprite(22850, -475);
block28.setAnimation("platform_1");
block.add(block28);
var block28C = createSprite(22850, -470);
block28C.scale = 1.02;
block28C.setAnimation("platform_1_collision");
blockCollision.add(block28C);

var block29 = createSprite(23350, -475);
block29.setAnimation("platform_1");
block.add(block29);
var block29C = createSprite(22350, -470);
block29C.scale = 1.02;
block29C.setAnimation("platform_1_collision");
blockCollision.add(block29C);

var block30 = createSprite(23450, -475);
block30.setAnimation("platform_1");
block.add(block30);
var block30C = createSprite(23450, -475);
block30C.scale = 1.05;
block30C.setAnimation("platform_1_collision");
blockCollision.add(block30C);

var block31 = createSprite(24600, -200);
block31.setAnimation("1x5");
block.add(block31);
var block31C = createSprite(24600, -161);
block31C.scale = 1.15;
block31C.setAnimation("1x5_collision");
blockCollision.add(block31C);

var block32 = createSprite(24100, -100);
block32.setAnimation("5x5");
block.add(block32);
var block32C = createSprite(24100, -82);
block32C.scale = 1.04;
block32C.setAnimation("5x5_collision");
blockCollision.add(block32C);

var block33 = createSprite(24900, -300);
block33.setAnimation("1x5");
block.add(block33);
var block33C = createSprite(24900, -261);
block33C.scale = 1.15;
block33C.setAnimation("1x5_collision");
blockCollision.add(block33C);

var block34 = createSprite(25700, -1100);
block34.setAnimation("5x5");
block.add(block34);
var block34C = createSprite(25700, -1118);
block34C.scale = 1.04;
block34C.setAnimation("5x5_collision");
blockCollision.add(block34C);

var block35 = createSprite(25700, -100);
block35.setAnimation("5x5");
block.add(block35);
var block35C = createSprite(25700, -118);
block35C.scale = 1.04;
block35C.setAnimation("5x5_collision");
blockCollision.add(block35C);

var block36 = createSprite(26600,-1000);
block36.setAnimation("2x5");
block.add(block36);
var block36C = createSprite(26600,-1014);
block36C.scale = 1.05;
block36C.setAnimation("2x5_collision");
blockCollision.add(block36C);

var block37 = createSprite(27800, -1300);
block37.setAnimation("5x5");
block.add(block37);
var block37C = createSprite(27800, -1318);
block37C.scale = 1.04;
block37C.setAnimation("5x5_collision");
blockCollision.add(block37C);

var block38 = createSprite(31300,-200);
block38.setAnimation("1x5");
block.add(block38);
block38.rotation = 90;
var block38C = createSprite(31300,-190);
block38C.scale = 1.05;
block38C.setAnimation("1x5_collision");
blockCollision.add(block38C);
block38C.rotation = 90;

var block39 = createSprite(33400, -900);
block39.setAnimation("5x5");
block.add(block39);
var block39C = createSprite(33400, -882);
block39C.scale = 1.04;
block39C.setAnimation("5x5_collision");
blockCollision.add(block39C);

var block40 = createSprite(34000,-1000);
block40.setAnimation("2x5");
block.add(block40);
var block40C = createSprite(34000,-1014);
block40C.scale = 1.05;
block40C.setAnimation("2x5_collision");
blockCollision.add(block40C);

var block41 = createSprite(35200, -300);
block41.setAnimation("5x5");
block.add(block41);
var block41C = createSprite(35200, -282);
block41C.scale = 1.05;
block41C.setAnimation("5x5_collision");
blockCollision.add(block41C);

var block42 = createSprite(35600, -1100);
block42.setAnimation("1x2");
block.add(block42);
block42.rotation = 90;
var block42C = createSprite(35600,-1099);
block42C.scale = 1.05;
block42C.setAnimation("1x2_collision");
block42C.width = 120;
blockCollision.add(block42C);
block42C.rotation = 90;

var block43 = createSprite(36000,-300);
block43.setAnimation("1x5");
block.add(block43);
var block43C = createSprite(36000,-290);
block43C.scale = 1.05;
block43C.setAnimation("1x5_collision");
blockCollision.add(block43C);

var block44 = createSprite(37300,-1000);
block44.setAnimation("1x5");
block.add(block44);
var block44C = createSprite(37300,-990);
block44C.scale = 1.05;
block44C.setAnimation("1x5_collision");
blockCollision.add(block44C);

var block45 = createSprite(37300,-500);
block45.setAnimation("1x5");
block.add(block45);
var block45C = createSprite(37300,-490);
block45C.scale = 1.05;
block45C.setAnimation("1x5_collision");
blockCollision.add(block45C);

var block46 = createSprite(37300, 0);
block46.setAnimation("1x5");
block.add(block46);
var block46C = createSprite(37300, 10);
block46C.scale = 1.05;
block46C.setAnimation("1x5_collision");
blockCollision.add(block46C);

var block47 = createSprite(38100, -800);
block47.setAnimation("1x5");
block.add(block47);
block47.rotation = 90;
var block47C = createSprite(38100, -810);
block47C.scale = 1.05;
block47C.setAnimation("1x5_collision");
blockCollision.add(block47C);
block47C.rotation = 90;

// Unique Block Attributes
blockCollision.setVisibleEach(false);


// HAZARDS ///////////////////////////////////////////////////////////////

// Groups
var spikes = createGroup();
//var spikes_2 = createGroup();

// Creating Sprites
var spike1 = createSprite(1200,-200);
spikes.add(spike1);
var spike2 = createSprite(2000,-200);
spikes.add(spike2);
var spike3 = createSprite(3100, -300);
spikes.add(spike3);
var spike4 = createSprite(3885, -585);
spikes.add(spike4);
spike4.scale = 0.75;
spike4.rotation = 90;
var spike5 = createSprite(3715, -585);
spikes.add(spike5);
spike5.scale = 0.75;
spike5.rotation = 270;
var spike6 = createSprite(3710, -180);
spikes.add(spike6);
spike6.scale = 0.5;
var spike7 = createSprite(3890, -180);
spikes.add(spike7);
spike7.scale = 0.5;
var spike8 = createSprite(2800, -700);
spikes.add(spike8);
spike8.rotation = 180;
var spike9 = createSprite(2900, -700);
spikes.add(spike9);
spike9.rotation = 180;

var spike10 = createSprite(5100, -200);
spikes.add(spike10);
var spike11 = createSprite(5190, -200);
spikes.add(spike11);
var spike12 = createSprite(5280, -200);
spikes.add(spike12);
var spike13 = createSprite(5370, -200);
spikes.add(spike13);
var spike14 = createSprite(5900, -200);
spikes.add(spike14);
var spike15 = createSprite(5990, -200);
spikes.add(spike15);

var spike16 = createSprite(6500, -200);
spikes.add(spike16);
var spike17 = createSprite(7100, -190);
spikes.add(spike17);
spike17.scale = 0.9;
var spike18 = createSprite(7200, -190);
spikes.add(spike18);
spike18.scale = 0.9;
var spike19 = createSprite(7800, -185);
spikes.add(spike19);
spike19.scale = 0.75;
var spike20 = createSprite(7900, -185);
spikes.add(spike20);
spike20.scale = 0.75;
var spike21 = createSprite(8000, -185);
spikes.add(spike21);
spike21.scale = 0.75;
var spike22 = createSprite(8100, -185);
spikes.add(spike22);
spike22.scale = 0.75;
var spike23 = createSprite(8200, -185);
spikes.add(spike23);
spike23.scale = 0.75;
var spike24 = createSprite(8300, -185);
spikes.add(spike24);
spike24.scale = 0.75;
var spike25 = createSprite(8400, -185);
spikes.add(spike25);
spike25.scale = 0.75;
var spike26 = createSprite(8500, -185);
spikes.add(spike26);
spike26.scale = 0.75;
var spike27 = createSprite(8700, -200);
spikes.add(spike27);
var spike28 = createSprite(8800, -200);
spikes.add(spike28);
var spike29 = createSprite(8900, -200);
spikes.add(spike29);
var spike30 = createSprite(9000, -200);
spikes.add(spike30);
var spike31 = createSprite(9080, -180);
spikes.add(spike31);
spike31.scale = 0.8;

var spike32 = createSprite(6000, -600);
spikes.add(spike32);
spike32.rotation = 180;
var spike33 = createSprite(5900, -600);
spikes.add(spike33);
spike33.rotation = 180;

var spike34 = createSprite(6750, -700);
spikes.add(spike34);
spike34.rotation = 180;
var spike35 = createSprite(6850, -700);
spikes.add(spike35);
spike35.rotation = 180;
var spike36 = createSprite(7550, -800);
spikes.add(spike36);
spike36.rotation = 180;
var spike37 = createSprite(7450, -800);
spikes.add(spike37);
spike37.rotation = 180;
var spike38 = createSprite(10100, -550);
spikes.add(spike38);
spike38.rotation = 180;
var spike39 = createSprite(10000, -550);
spikes.add(spike39);
spike39.rotation = 180;
var spike40 = createSprite(9900, -550);
spikes.add(spike40);
spike40.rotation = 180;
var spike41 = createSprite(9800, -550);
spikes.add(spike41);
spike41.rotation = 180;
var spike42 = createSprite(9700, -550);
spikes.add(spike42);
spike42.rotation = 180;
var spike43 = createSprite(10200, -550);
spikes.add(spike43);
spike43.rotation = 180;
var spike44 = createSprite(10300, -550);
spikes.add(spike44);
spike44.rotation = 180;
var spike45 = createSprite(10400, -550);
spikes.add(spike45);
spike45.rotation = 180;
var spike46 = createSprite(10500, -550);
spikes.add(spike46);
spike46.rotation = 180;
var spike47 = createSprite(10600, -550);
spikes.add(spike47);
spike47.rotation = 180;

var spike48 = createSprite(11600, -190);
spikes.add(spike48);
spike48.scale = 0.75;
var spike49 = createSprite(11700, -200);
spikes.add(spike49);
var spike50 = createSprite(11800, -200);
spikes.add(spike50);
var spike51 = createSprite(11900, -190);
spikes.add(spike51);
spike51.scale = 0.75;
var spike52 = createSprite(12400, -200);
spikes.add(spike52);
var spike53 = createSprite(12500, -190);
spikes.add(spike53);
spike53.scale = 0.75;
var spike54 = createSprite(13400, -200);
spikes.add(spike54);
var spike55 = createSprite(13300, -200);
spikes.add(spike55);
var spike56 = createSprite(13100, -200);
spikes.add(spike56);
var spike57 = createSprite(13000, -190);
spikes.add(spike57);
spike57.scale = 0.75;

var spike58 = createSprite(13600, -615);
spikes.add(spike58);
var spike59 = createSprite(13500, -615);
spikes.add(spike59);
spikes.add(createSprite(13700, -180));
spikes.add(createSprite(13800, -200));
spikes.add(createSprite(13900, -180));
spikes.add(createSprite(14000, -200));
spikes.add(createSprite(14100, -180));
spikes.add(createSprite(14200, -200));
spikes.add(createSprite(14300, -180));
spikes.add(createSprite(14400, -570));

spikes.add(createSprite(15020, -200));
spikes.add(createSprite(15180, -200));
spikes.add(createSprite(15100, -200));

var spike60 = createSprite(15000, -585);
spikes.add(spike60);
spike60.rotation = 180;
spike60.scale = 0.85;
var spike61 = createSprite(14900, -585);
spikes.add(spike61);
spike61.rotation = 180;
spike61.scale = 0.85;
var spike62 = createSprite(15100, -585);
spikes.add(spike62);
spike62.rotation = 180;
spike62.scale = 0.85;
var spike63 = createSprite(15200, -585);
spikes.add(spike63);
spike63.rotation = 180;
spike63.scale = 0.85;
var spike64 = createSprite(15300, -585);
spikes.add(spike64);
spike64.rotation = 180;
spike64.scale = 0.85;

spikes.add(createSprite(16400, -200));
spikes.add(createSprite(16600, -200));
spikes.add(createSprite(16700, -200));
spikes.add(createSprite(17200, -500));

var spike65 = createSprite(17000, -800);
spikes.add(spike65);
spike65.rotation = 180;
var spike66 = createSprite(16900, -800);
spikes.add(spike66);
spike66.rotation = 180;
var spike67 = createSprite(18100, -700);
spikes.add(spike67);
spike67.rotation = 180;
var spike68 = createSprite(18200, -700);
spikes.add(spike68);
spike68.rotation = 180;
var spike69 = createSprite(20300, -600);
spikes.add(spike69);
spike69.rotation = 180;

spikes.add(createSprite(17300, -200));
spikes.add(createSprite(17400, -200));
spikes.add(createSprite(17500, -200));
spikes.add(createSprite(17600, -200));
spikes.add(createSprite(17700, -175));

spikes.add(createSprite(20300, -175));
spikes.add(createSprite(20200, -200));
spikes.add(createSprite(20100, -200));
spikes.add(createSprite(20000, -200));
spikes.add(createSprite(19900, -175));

spikes.add(createSprite(20815, -200));
spikes.add(createSprite(20900, -200));
spikes.add(createSprite(20985, -200));

spikes.add(createSprite(22400, -175));
spikes.add(createSprite(22850, -200));
var spike70 = createSprite(22850, -400);
spikes.add(spike70);
spike70.rotation = 180;
var spike71 = createSprite(23350, -400);
spikes.add(spike71);
spike71.rotation = 180;
var spike72 = createSprite(23450, -400);
spikes.add(spike72);
spike72.rotation = 180;

spikes.add(createSprite(23350, -200));
spikes.add(createSprite(23450, -150));
spikes.add(createSprite(23800, -200));

var spike73 = createSprite(24500, -400);
spikes.add(spike73);
spike73.rotation = 270;
var spike74 = createSprite(24400, -350);
spikes.add(spike74);
spike74.rotation = 270;
var spike75 = createSprite(24400, -300);
spikes.add(spike75);
spike75.rotation = 90;
var spike76 = createSprite(24500, -350);
spikes.add(spike76);
spike76.rotation = 90;

var spike77 = createSprite(24800, -500);
spikes.add(spike77);
spike77.rotation = 270;
var spike78 = createSprite(24800, -450);
spikes.add(spike78);
spike78.rotation = 90;
var spike79 = createSprite(24700, -400);
spikes.add(spike79);
spike79.rotation = 90;
var spike80 = createSprite(24700, -450);
spikes.add(spike80);
spike80.rotation = 270;
var spike81 = createSprite(25500, -800);
spikes.add(spike81);
spike81.rotation = 180;
var spike82 = createSprite(25600, -800);
spikes.add(spike82);
spike82.rotation = 180;

spikes.add(createSprite(25000, -200));
spikes.add(createSprite(25100, -200));
spikes.add(createSprite(25200, -200));
spikes.add(createSprite(25300, -200));
spikes.add(createSprite(25400, -200));

spikes.add(createSprite(26900, -175));
spikes.add(createSprite(27000, -200));
spikes.add(createSprite(27100, -175));
spikes.add(createSprite(27200, -200));
spikes.add(createSprite(27300, -175));
spikes.add(createSprite(27400, -200));
spikes.add(createSprite(27500, -175));
spikes.add(createSprite(27600, -200));
spikes.add(createSprite(27700, -175));
spikes.add(createSprite(27800, -200));
spikes.add(createSprite(27900, -175));
spikes.add(createSprite(28000, -200));
spikes.add(createSprite(28100, -175));
spikes.add(createSprite(28200, -200));
spikes.add(createSprite(28300, -175));
spikes.add(createSprite(28400, -200));
spikes.add(createSprite(28500, -175));

spikes.add(createSprite(29410, -185));
spikes.add(createSprite(29500, -200));
spikes.add(createSprite(29590, -185));

spikes.add(createSprite(29910, -185));
spikes.add(createSprite(30000, -200));
spikes.add(createSprite(30090, -185));

spikes.add(createSprite(32000, -200));
spikes.add(createSprite(32100, -200));
spikes.add(createSprite(32200, -200));

spikes.add(createSprite(32700, -200));
spikes.add(createSprite(32780, -200));
spikes.add(createSprite(32860, -200));
spikes.add(createSprite(32940, -200));

spikes.add(createSprite(31500, -300));
spikes.add(createSprite(31000, -200));

var spike83 = createSprite(33200, -600);
spikes.add(spike83);
spike83.rotation = 180;
var spike84 = createSprite(33300, -600);
spikes.add(spike84);
spike84.rotation = 180;
var spike85 = createSprite(33400, -600);
spikes.add(spike85);
spike85.rotation = 180;
var spike86 = createSprite(33500, -600);
spikes.add(spike86);
spike86.rotation = 180;
var spike87 = createSprite(33600, -600);
spikes.add(spike87);
spike87.rotation = 180;
var spike88 = createSprite(34910, -400);
spikes.add(spike88);
spike88.rotation = 270;
spike88.scale = 0.9;

spikes.add(createSprite(33950, -200));
spikes.add(createSprite(34050, -200));

spikes.add(createSprite(34400, -185));
spikes.add(createSprite(34500, -200));
spikes.add(createSprite(34600, -200));
spikes.add(createSprite(34700, -200));
spikes.add(createSprite(34800, -200));
spikes.add(createSprite(34900, -185));

spikes.add(createSprite(35100, -600));
spikes.add(createSprite(35200, -600));
spikes.add(createSprite(35300, -600));

var spike89 = createSprite(35490, -400);
spikes.add(spike89);
spike89.rotation = 90;
spike89.scale = 0.9;

var spike90 = createSprite(35550, -1000);
spikes.add(spike90);
spike90.rotation = 180;

var spike90 = createSprite(35650, -1000);
spikes.add(spike90);
spike90.rotation = 180;

spikes.add(createSprite(35500, -180));
spikes.add(createSprite(35600, -200));
spikes.add(createSprite(35700, -200));
spikes.add(createSprite(35800, -200));
spikes.add(createSprite(35900, -180));

spikes.add(createSprite(36000, -600));

spikes.add(createSprite(36400, -180));
spikes.add(createSprite(36480, -180));
spikes.add(createSprite(36560, -180));

spikes.add(createSprite(37300, -1300));
var spike91 = createSprite(37300, -1500);
spikes.add(spike91);
spike91.rotation = 180;
spikes.add(createSprite(37300, -1600));

spikes.add(createSprite(37900, -900));
spikes.add(createSprite(38000, -900));
spikes.add(createSprite(38100, -900));
spikes.add(createSprite(38200, -900));
spikes.add(createSprite(38300, -900));

spikes.add(createSprite(37500, -200));
spikes.add(createSprite(37700, -200));
spikes.add(createSprite(37900, -200));
spikes.add(createSprite(38100, -200));
spikes.add(createSprite(38300, -200));
spikes.add(createSprite(38500, -200));

spikes.add(createSprite(39000, -200));
spikes.add(createSprite(39080, -200));
spikes.add(createSprite(39160, -200));
spikes.add(createSprite(39240, -200));
spikes.add(createSprite(39320, -200));

spikes.add(createSprite(40300, -200));

spikes.add(createSprite(40700, -200));
spikes.add(createSprite(40790, -180));

spikes.add(createSprite(41490, -200));
spikes.add(createSprite(41400, -180));

var spike92 = createSprite(42300, -200);
spikes.add(spike92);
var spike93 = createSprite(42390, -200);
spikes.add(spike93);
var spike94 = createSprite(42480, -200);
spikes.add(spike94);

// Group Attributes
spikes.setAnimationEach("Spike1");
spikes.setColliderEach("circle", 0, 20, 35);

// FINISH LINE ////////////////////////////////////////////////////
var finishLine = createSprite(43100, -500);
finishLine.setAnimation("finishLine");
finishLine.scale = 1.1;

// GROUND ///////////////////////////////////////////////////////////////
var groundObj = createSprite(175,0);
groundObj.setAnimation("Ground1");
groundObj.scale = 3;
groundObj.tint = "rgb(60, 120, 215)";

var groundObj2 = createSprite(1375,0);
groundObj2.setAnimation("Ground1");
groundObj2.scale = 3;
groundObj2.tint = "rgb(60, 120, 215)";

var groundLine = createSprite(0,-150);
groundLine.setAnimation("groundLine");
groundLine.scale = 3;



/////////////////////////////////////////////////////////////////////////
//MISC
/////////////////////////////////////////////////////////////////////////

var arrowKeysMove = createSprite(0,-700);
arrowKeysMove.setAnimation("arrowKeysMove");
var arrowKeysJump = createSprite(1200,-700);
arrowKeysJump.setAnimation("arrowKeysJump");




/////////////////////////////////////////////////////////////////////////
// DEBUG
player.debug = false;
groundObj.debug = false;
groundObj2.debug = false;
backgroundObj.debug = false;
backgroundObj2.debug = false;


// DRAW /////////////////////////////////////////////////////////////////
function draw() {
  // draw background
background("white");
  // update sprites

BG();
infiniteGround();
infiniteBackground();

playerSizePortals();
playerSpeedPortals();
effectCircleFunc();
playerGravityPortals();

playerMovement();
playerObjects();


playerCollision();
playerGravity();
playerBounds();

playerCheckpoints();
cameraMovement();
playerRespawn();

finishGame();
drawSprites();



  // other

}
///////////////////////////////////////////////////////////////////////

function playerMovement() {

  // Velocity limits
  if (player.velocityX > 20 * speedMultiplier) {
    player.velocityX = 20 * speedMultiplier;
  }

  if (player.velocityX < -15 * speedMultiplier) {
    player.velocityX = -15 * speedMultiplier;
  }

  var canMove = respawnTimer > maxRespawn;

  var movingRight = keyDown("right") && canMove;
  var movingLeft = keyDown("left") && canMove;

  // Restart the movement animation immediately on a fresh input.
  // This also restarts the same animation when the player taps
  // the same direction again.

  if (keyWentDown("right") && canMove) {
    if (currentGravity == 0) {
      player.setAnimation("Cube_right");
    } else {
      player.setAnimation("U_Cube_right");
    }

    player.animation.rewind();
    player.animation.play();
  }

  if (keyWentDown("left") && canMove) {
    if (currentGravity == 0) {
      player.setAnimation("Cube_left");
    } else {
      player.setAnimation("U_Cube_left");
    }

    player.animation.rewind();
    player.animation.play();
  }

  // Horizontal movement
  if (movingRight) {
    player.velocityX =
      player.velocityX + 10.0 * speedMultiplier;

    lastDirection = 0;

    if (currentGravity == 0) {
      player.setAnimation("Cube_right");
    } else {
      player.setAnimation("U_Cube_right");
    }
  }

  if (movingLeft) {
    player.velocityX =
      player.velocityX - 6.0 * speedMultiplier;

    lastDirection = 1;

    if (currentGravity == 0) {
      player.setAnimation("Cube_left");
    } else {
      player.setAnimation("U_Cube_left");
    }
  }

  // Slowing down
  if (!keyDown("right") && player.velocityX > 0) {
    player.velocityX =
      player.velocityX - 5.0 * speedMultiplier;
  }

  if (!keyDown("left") && player.velocityX < 0) {
    player.velocityX =
      player.velocityX + 5.0 * speedMultiplier;
  }

  if (!keyDown("right") &&
      player.velocityX > 0.00 &&
      player.velocityX < 5.00) {
    player.velocityX = 0;
  }

  if (!keyDown("left") &&
      player.velocityX < 0.00 &&
      player.velocityX > -5.00) {
    player.velocityX = 0;
  }

  // Idle animation
  if (!keyDown("right") && !keyDown("left")) {
    if (currentGravity == 0) {
      player.setAnimation("Cube_idle");
    } else {
      player.setAnimation("U_Cube_idle");
    }
  }

  // Jumping
  if (currentGravity == 0) {

    if (player.collide(groundLine) || player.collide(block)) {

      if (keyDown("up_arrow") && canMove) {
        if (currentSize == 0) {
          player.velocityY = -50;
        } else {
          player.velocityY = -40;
        }
      }

      if (keyDown("space") && canMove) {
        if (currentSize == 0) {
          player.velocityY = -50;
        } else {
          player.velocityY = -40;
        }
      }
    }
  }

  if (currentGravity == 1) {

    if (player.collide(block)) {

      if (keyDown("up_arrow") && canMove) {
        if (currentSize == 0) {
          player.velocityY = 50;
        } else {
          player.velocityY = 40;
        }
      }
    }
  }
}


// something i should do faster
function finishGame() {
  if (player.isTouching(finishLine)) {
    player.velocityX = 0;
    player.velocityY = 0;
    timeEnable = 0;
    backgroundObj.y = -10000;
    backgroundObj2.y = -10000;
    groundObj.y = -10000;
    groundObj2.y = -10000;
    groundLine.y = -10000;
    spike92.y = -10000;
    spike93.y = -10000;
    spike94.y = -10000;
    
    textFont("Impact");
    stroke("black");
    fill("black");
    textAlign("CENTER");
    textSize(90);
    text("Level Complete!", camera.x - 400, camera.y - 200);
    textSize(70);
    text("Thanks for playing.", camera.x - 400, camera.y - 100);
    textSize(50);
    text("DEATHS:  " + deathCount, camera.x - 400, camera.y + 100);
    text("TIME TAKEN:  " + timeTaken + " SECONDS", camera.x - 400, camera.y + 200);
  }
  
  if (timeEnable == 1) {
    timeTaken = World.seconds;
  }
}

function playerCollision() {
  groundLine.x = camera.x;
  player.collide(groundLine);
  player.collide(blockCollision);
  player.collide(block);
}

function playerObjects() {
  // JUMP RINGS
  
    if (jumpRings.isTouching(player) && keyWentDown("up")) {
      
      if (currentSize == 0) {
    effectCircle2.tint = "rgb(245, 255, 20)";
    effectCircle2.scale = 2;
    if (currentGravity == 0) {
    player.velocityY = -50;
      } else {
    player.velocityY = 50;
      }
    } else {
    effectCircle2.tint = "rgb(245, 255, 20)";
    effectCircle2.scale = 1.5;
    if (currentGravity == 0) {
    player.velocityY = -40;
      } else {
    player.velocityY = 40;
        }
      }
    }
// -70 and -55

  // JUMP PADS
if (jumpPads.isTouching(player)) {
   if (currentSize == 0) {
    effectCircle2.tint = "rgb(245, 255, 20)";
    effectCircle2.scale = 2;
    if (currentGravity == 0) {
    player.velocityY = -70;
      } else {
    player.velocityY = 70;
      }
    } else {
    effectCircle2.tint = "rgb(245, 255, 20)";
    effectCircle2.scale = 1.5;
    if (currentGravity == 0) {
    player.velocityY = -55;
      } else {
    player.velocityY = 55;
        }
      }
  }
}

function playerGravityPortals() {
  // YELLOW PORTAL
  if (yellowPortals.isTouching(player) && currentGravity == 0) {
   if (player.velocityY > 50) {
     player.velocityY = 50;
   }
    effectCircle.tint = "rgb(255, 255, 0)";
    effectCircle.scale = 2; 
    
    currentGravity = 1;
  }
  // BLUE PORTAL
  if (bluePortals.isTouching(player) && currentGravity == 1) {
   if (player.velocityY < -50) {
     player.velocityY = -50;
   }
    effectCircle.tint = "rgb(0, 255, 255)";
    effectCircle.scale = 2; 

    currentGravity = 0;
  }
  
}

function playerSizePortals() {
  // MINI PORTAL
  if (miniPortals.isTouching(player) && currentSize == 0) {
    
    effectCircle.tint = "rgb(255, 50, 255)";
    effectCircle.scale = 1.75; 
    
    currentSize = 1;
  }
  // BIG PORTAL
   if (bigPortals.isTouching(player) && currentSize == 1) {
   
    effectCircle.tint = "rgb(50, 255, 50)";
    effectCircle.scale = 2.5; 
    
    currentSize = 0;
  }
  if (currentSize == 1) {
    
    player.scale = 0.6;
  } else {
    player.scale = 1;
  }
}

function playerSpeedPortals() {
  // SLOW PORTALS
  if (speed0.isTouching(player)) {
    if (speedMultiplier != 0.9)    {
    effectCircle2.tint = "rgb(255, 180, 50)";
    effectCircle2.scale = 2; 
    }
    speedMultiplier = 0.9;
  }
  
  // 1x SPEED PORTALS
  if (speed1.isTouching(player)) {
    if (speedMultiplier != 1.25)    {
    effectCircle2.tint = "rgb(50, 210, 255)";
    effectCircle2.scale = 2; 
    }
    speedMultiplier = 1.25;
  }
  
  // 2x SPEED PORTALS
  if (speed2.isTouching(player)) {
    if (speedMultiplier != 1.5)    {
    effectCircle2.tint = "rgb(50, 255, 50)";
    effectCircle2.scale = 2; 
    }
    speedMultiplier = 1.5;
  }
  
  // 3x SPEED PORTALS
  if (speed3.isTouching(player)) {
    if (speedMultiplier != 1.75)    {
    effectCircle2.tint = "rgb(255, 50, 255)";
    effectCircle2.scale = 2; 
    }
    speedMultiplier = 1.75;
  }
}

function playerCheckpoints() {
  // Assigning value
  if (player.isTouching(checkpoint_1)) 
    currentCheckpoint = 1;
  if (player.isTouching(checkpoint_2)) 
    currentCheckpoint = 2;
  if (player.isTouching(checkpoint_3)) 
    currentCheckpoint = 3;
  if (player.isTouching(checkpoint_4)) 
    currentCheckpoint = 4;
  if (player.isTouching(checkpoint_5)) 
    currentCheckpoint = 5;
  
  
  // Changing sprite texture
  if (currentCheckpoint == 1) {
    checkpoint_1.setAnimation("checkpointActive");
  } else {
    checkpoint_1.setAnimation("checkpointInactive");
  }
  
  if (currentCheckpoint == 2) {
    checkpoint_2.setAnimation("checkpointActive");
  } else {
    checkpoint_2.setAnimation("checkpointInactive");
  }
  
  if (currentCheckpoint == 3) {
    checkpoint_3.setAnimation("checkpointActive");
  } else {
    checkpoint_3.setAnimation("checkpointInactive");
  }
  if (currentCheckpoint == 4) {
    checkpoint_4.setAnimation("checkpointActive");
  } else {
    checkpoint_4.setAnimation("checkpointInactive");
  }
  if (currentCheckpoint == 5) {
    checkpoint_5.setAnimation("checkpointActive");
  } else {
    checkpoint_5.setAnimation("checkpointInactive");
  }
}

function playerRespawn() {
  //Timer
  if (respawnTimer < 100) {
  respawnTimer = respawnTimer + 1;
  }
  
  // Halting movement
  if (respawnTimer < maxRespawn + 8) {
    player.velocityX = 0;
    player.velocityY = 0; 
  }
  ////////////////////////////////////////////////////////////////////////
  // Hazard detection
  if (spikes.isTouching(player) && respawnTimer > maxRespawn) {
     if (debugCollision == 0) {
      playSound("assets/ExplodeSound.mp3");
      respawnCircle.tint = "rgb(255, 255, 0)";
      deathCount = deathCount + 1;
      respawnTimer = 0;
    }
  }
   if (player.y < -2200 && respawnTimer > maxRespawn) {
    if (debugCollision == 0) {
      playSound("assets/ExplodeSound.mp3");
      respawnCircle.tint = "rgb(255, 255, 0)";
      respawnTimer = 0;
    }
  }
  ////////////////////////////////////////////////////////////////////////
  // Respawn events
  if (respawnTimer > 0 && respawnTimer < 5) {
    respawnCircle.scale = respawnCircle.scale + 1;
    camera.x = camera.x + randomNumber(-40,40);
    camera.y = camera.y + randomNumber(-40,40);
  }
  if (respawnTimer > 4 && respawnTimer < 30) {
    respawnCircle.scale = respawnCircle.scale - 0.3;
  }
  ////////////////////////////////////////////////////////////////////////
  // Respawning at a checkpoint
  if (respawnTimer == 30) {
    if (currentCheckpoint == 0) {
    player.x = 0;
    player.y = -200;
    currentSize = 0;
    currentGravity = 0;
    //speedMultiplier = 1.25;
    }
     if (currentCheckpoint == 1) {
    player.x = checkpoint_1.x;
    player.y = checkpoint_1.y + 40;
    currentSize = 0;
    currentGravity = 0;
    speedMultiplier = 1.25;
    }
     if (currentCheckpoint == 2) {
    player.x = checkpoint_2.x;
    player.y = checkpoint_2.y + 40;
    currentSize = 0;
    currentGravity = 0;
    speedMultiplier = 1.25;
    }
     if (currentCheckpoint == 3) {
    player.x = checkpoint_3.x;
    player.y = checkpoint_3.y + 40;
    currentSize = 0;
    currentGravity = 0;
    speedMultiplier = 1.25;
    }
     if (currentCheckpoint == 4) {
    player.x = checkpoint_4.x;
    player.y = checkpoint_4.y + 40;
    currentSize = 0;
    currentGravity = 0;
    speedMultiplier = 1.25;
    }
     if (currentCheckpoint == 5) {
    player.x = checkpoint_5.x;
    player.y = checkpoint_5.y + 40;
    currentSize = 0;
    currentGravity = 0;
    speedMultiplier = 1.25;
    }
  }
  ////////////////////////////////////////////////////////////////////////
  if (respawnTimer > 35 && respawnTimer < 70) {
    respawnCircle.tint = "rgb(0, 240, 255)";
    respawnCircle.scale = respawnCircle.scale + 0.1;
  }
  if (respawnTimer > 70 && respawnTimer < 76) {
    respawnCircle.scale = respawnCircle.scale - 1;
  }

  // Player visibility
  if (respawnTimer <= maxRespawn) {
    player.visible = 0;
  } else {
    player.visible = 1;
  }
  
  // Death sound
  if (respawnTimer == 35) {
    playSound("assets/DeathSound.mp3");
  }
  
  // Circle following the player
  respawnCircle.x = player.x;
  respawnCircle.y = player.y + 25;
  
  // Scale reset
  if (respawnCircle.scale < 0.00) {
    respawnCircle.scale = 0;
  }
}

function BG() {
// MAKING THE BACKGROUND DO ITS THING
backgroundObj.x = camera.x / 1.4;
backgroundObj2.x = (camera.x / 1.4) + 1600;

if (player.x < checkpoint_1.x) {
  backgroundObj.tint = "rgb(100, 150, 235)";
  backgroundObj2.tint = "rgb(100, 150, 235)";
  groundObj.tint = "rgb(60, 120, 215)";
  groundObj2.tint = "rgb(60, 120, 215)";
  }
if (player.x >= checkpoint_1.x && player.x < checkpoint_2.x) {
  backgroundObj.tint = "rgb(255, 100, 240)";
  backgroundObj2.tint = "rgb(255, 100, 240)";
  groundObj.tint = "rgb(240, 100, 240)";
  groundObj2.tint = "rgb(240, 100, 240)";
  }
if (player.x >= checkpoint_2.x && player.x < checkpoint_3.x) {
  backgroundObj.tint = "rgb(150, 225, 75)";
  backgroundObj2.tint = "rgb(150, 225, 75)";
  groundObj.tint = "rgb(130, 205, 75)";
  groundObj2.tint = "rgb(130, 205, 75)";
  }
if (player.x >= checkpoint_3.x && player.x < checkpoint_4.x) {
  backgroundObj.tint = "rgb(225, 90, 90)";
  backgroundObj2.tint = "rgb(225, 90, 90)";
  groundObj.tint = "rgb(215, 80, 80)";
  groundObj2.tint = "rgb(215, 80, 80)";
  }
if (player.x >= checkpoint_4.x && player.x < checkpoint_5.x) {
  backgroundObj.tint = "rgb(170, 70, 230)";
  backgroundObj2.tint = "rgb(170, 70, 230)";
  groundObj.tint = "rgb(160, 60, 220)";
  groundObj2.tint = "rgb(160, 60, 220)";
  }
if (player.x >= checkpoint_5.x) {
  backgroundObj.tint = "rgb(100, 100, 100)";
  backgroundObj2.tint = "rgb(100, 100, 100)";
  groundObj.tint = "rgb(90, 90, 90)";
  groundObj2.tint = "rgb(90, 90, 90)";
  }
}

function cameraMovement() {
  // Camera Y lock
if (player.y < -450) {
  camera.y = player.y;
} else {
  camera.y = -449;
  }
  
if (player.y < -1200) {
  camera.y = -1199;
} 

  
  // Camera X lock
  if (player.x > 25) {
  camera.x = player.x;
} else {
  camera.x = 26;
  }
   if (player.x > 42600) {
     camera.x = 42600;
  }
}

function infiniteGround() {
  // GROUND
  if (player.x > (groundObj.x + 1200)) {
    groundObj.x = groundObj.x + 2400;
  }
  if (player.x > (groundObj2.x + 1200)) {
    groundObj2.x = groundObj2.x + 2400;
  }
  if (player.x < (groundObj.x - 1200)) {
    groundObj.x = groundObj.x - 2400;
  }
  if (player.x < (groundObj2.x - 1200)) {
    groundObj2.x = groundObj2.x - 2400;
  }
}

function effectCircleFunc() {
  // Circle 1
  effectCircle.x = player.x;
  effectCircle.y = player.y;
  effectCircle.scale = effectCircle.scale - 0.25;
  
  if (effectCircle.scale < 0) {
    effectCircle.scale = 0;
  }
  
  // Circle 2
  effectCircle2.x = player.x;
  effectCircle2.y = player.y;
  effectCircle2.scale = effectCircle2.scale - 0.25;
  
  if (effectCircle2.scale < 0) {
    effectCircle2.scale = 0;
  }
  
}

function playerBounds() {
  if (player.x < -425) {
    player.x = -424;
  }
  if (player.y > -150) {
    player.y = -200;
  }
}

function playerGravity() {
if (!player.collide(block)) {
  if (currentGravity == 0) {
  player.velocityY = player.velocityY + 5;
  } else {
  player.velocityY = player.velocityY - 5;
  }
}
  if (player.velocityY > 75) {
    player.velocityY = 75;
  }
  if (player.velocityY < -75) {
    player.velocityY = -75;
  }
}

function infiniteBackground() {
  // BACKGROUND (code must be duplicated for some reason)
  // SET 1
  if (player.x > (backgroundObj.x + 1600)) {
    backgroundObj.x = backgroundObj.x + 3200;
  }
  if (player.x > (backgroundObj2.x + 1600)) {
    backgroundObj2.x = backgroundObj2.x + 3200;
  }
  if (player.x < (backgroundObj.x - 1600)) {
    backgroundObj.x = backgroundObj.x - 3200;
  }
  if (player.x < (backgroundObj2.x - 1600)) {
    backgroundObj2.x = backgroundObj2.x - 3200;
  }
  
  // SET 2
  if (player.x > (backgroundObj.x + 1600)) {
    backgroundObj.x = backgroundObj.x + 3200;
  }
  if (player.x > (backgroundObj2.x + 1600)) {
    backgroundObj2.x = backgroundObj2.x + 3200;
  }
  if (player.x < (backgroundObj.x - 1600)) {
    backgroundObj.x = backgroundObj.x - 3200;
  }
  if (player.x < (backgroundObj2.x - 1600)) {
    backgroundObj2.x = backgroundObj2.x - 3200;
  }
  
  //SET 3
  if (player.x > (backgroundObj.x + 1600)) {
    backgroundObj.x = backgroundObj.x + 3200;
  }
  if (player.x > (backgroundObj2.x + 1600)) {
    backgroundObj2.x = backgroundObj2.x + 3200;
  }
  if (player.x < (backgroundObj.x - 1600)) {
    backgroundObj.x = backgroundObj.x - 3200;
  }
  if (player.x < (backgroundObj2.x - 1600)) {
    backgroundObj2.x = backgroundObj2.x - 3200;
  }
  
   //SET 4
  if (player.x > (backgroundObj.x + 1600)) {
    backgroundObj.x = backgroundObj.x + 3200;
  }
  if (player.x > (backgroundObj2.x + 1600)) {
    backgroundObj2.x = backgroundObj2.x + 3200;
  }
  if (player.x < (backgroundObj.x - 1600)) {
    backgroundObj.x = backgroundObj.x - 3200;
  }
  if (player.x < (backgroundObj2.x - 1600)) {
    backgroundObj2.x = backgroundObj2.x - 3200;
  }
  
   //SET 5
  if (player.x > (backgroundObj.x + 1600)) {
    backgroundObj.x = backgroundObj.x + 3200;
  }
  if (player.x > (backgroundObj2.x + 1600)) {
    backgroundObj2.x = backgroundObj2.x + 3200;
  }
  if (player.x < (backgroundObj.x - 1600)) {
    backgroundObj.x = backgroundObj.x - 3200;
  }
  if (player.x < (backgroundObj2.x - 1600)) {
    backgroundObj2.x = backgroundObj2.x - 3200;
  }
}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
