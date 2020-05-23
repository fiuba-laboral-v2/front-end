import React, { FunctionComponent } from "react";
import { MyJobApplications } from "./component";
import { IJobApplication } from "$interfaces/JobApplication";

export const MyJobApplicationsContainer: FunctionComponent = () => {
  const jobApplications: IJobApplication[] = [
    {
      applicant: {
        uuid: "238a8b4b-430d-4a4d-b91e-a95a393d1279",
        user: {
          email: "sebastian.e.blanco@gmail.com",
          name: "Sebastian",
          surname: "Blanco"
        },
        padron: 98539,
        description: "description",
        links: [],
        sections: [],
        careers: [],
        capabilities: []
      },
      offer: {
        uuid: "4c925fdc-8fd4-47ed-9a24-fa81ed5cc9da",
        company: {
          uuid: "4c925fdc-8fd4-47ed-9a24-fa81ed5cc9da",
          user: {
            email: "eclapton@devartis.com",
            name: "Eric",
            surname: "Clapton"
          },
          cuit: "30711819017",
          companyName: "Devartis"
        },
        title: "Desarrollador Java",
        description: "description",
        hoursPerDay: 8,
        minimumSalary: 10,
        maximumSalary: 100,
        createdAt: "1589940374932"
      }
    }
  ];

  return (
    <MyJobApplications jobApplications={jobApplications}/>
  );
};
