#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';

import ec2 = require('@aws-cdk/aws-ec2');
import { Vpc, CfnVPC, PrivateSubnet } from '@aws-cdk/aws-ec2';

export interface CustomVpcProps extends cdk.StackProps {
  cidr?: string;
  maxAzs?: number;
  enableDnsHostnames?: boolean;
}

export class CustomVpcStack extends cdk.Stack {

  readonly vpc: Vpc;

  constructor(app: cdk.App, id: string, props?: CustomVpcProps) {
    super(app, id, props);

    const privateSubnectConfiguration = {
      cidrMask: 26,
      name: 'private-subnet',
      subnetType: ec2.SubnetType.PRIVATE,
    };

    const privateSubnectConfiguration2 = {
      cidrMask: 26,
      name: 'cusomt-private-subnet',
      subnetType: ec2.SubnetType.PRIVATE,
    };
    
    const publicSubnectConfiguration = {
      cidrMask: 26,
      name: 'public-subnet',
      subnetType: ec2.SubnetType.PUBLIC,
    };

    // The code that defines your stack goes here
    this.vpc = new ec2.Vpc(this, 'CustomVPC',{
      cidr: props?.cidr,
      maxAzs: 3,
      subnetConfiguration: [privateSubnectConfiguration,privateSubnectConfiguration2,publicSubnectConfiguration]
    });

    // Iterate the private subnets
    const selection = this.vpc.selectSubnets({
      subnetType: ec2.SubnetType.PRIVATE
    });

    for (const subnet of selection.subnets) {
      console.log(subnet.toString())
    }
    
  }
}
