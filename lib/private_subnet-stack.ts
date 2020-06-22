#!/usr/bin/env node
import { checkServerIdentity } from "tls";
import * as cdk from '@aws-cdk/core';
import { Vpc, PrivateSubnet } from "@aws-cdk/aws-ec2";


export interface PrivateSubnetProp extends cdk.StackProps {
    vpc: Vpc;
}

export class PrivateSubnetStack extends cdk.Stack {

    readonly privateSubnet: PrivateSubnet;

    constructor(app:cdk.App, id:string, props: PrivateSubnetProp ) {
        super(app, id, props);

        this.privateSubnet = new PrivateSubnet(this,id,{
            vpcId: props?.vpc.vpcId,
            availabilityZone: 'ap-northeast-2a',
            cidrBlock: '10.0.1.0/24',
            mapPublicIpOnLaunch: true
        });

    }

}