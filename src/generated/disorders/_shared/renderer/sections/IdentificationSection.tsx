import {
  Briefcase,
  Cake,
  GraduationCap,
  MessageSquarePlus,
  User,
  Users,
  VenusAndMars,
} from "lucide-react";
import type { PatientSlice } from "../model/assessmentPort";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function IdentificationSection({
  assessment,
}: {
  readonly assessment: PatientSlice;
}) {
  const { state, setPatientField } = assessment;
  return (
    <div className="p-5 space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <Field>
          <FieldLabel htmlFor="paciente">
            <User className="h-3.5 w-3.5" /> Nome / ID
          </FieldLabel>
          <Input
            id="paciente"
            type="text"
            placeholder="Identificação"
            value={state.patient.nomeId}
            onChange={(e) => setPatientField("nomeId", e.target.value)}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="dataNasc">
            <Cake className="h-3.5 w-3.5" /> Data de nascimento
          </FieldLabel>
          <Input
            id="dataNasc"
            type="date"
            value={state.patient.dataNascimento}
            onChange={(e) => setPatientField("dataNascimento", e.target.value)}
          />
        </Field>
        <Field>
          <FieldLabel>
            <VenusAndMars className="h-3.5 w-3.5" /> Sexo
          </FieldLabel>
          <RadioGroup
            value={state.patient.sexo}
            onValueChange={(v) => setPatientField("sexo", v)}
            className="flex items-center gap-4 h-9"
          >
            <div className="flex items-center gap-1.5">
              <RadioGroupItem value="M" id="sexo-m" />
              <Label htmlFor="sexo-m">M</Label>
            </div>
            <div className="flex items-center gap-1.5">
              <RadioGroupItem value="F" id="sexo-f" />
              <Label htmlFor="sexo-f">F</Label>
            </div>
          </RadioGroup>
        </Field>
        <Field>
          <FieldLabel htmlFor="genero">
            <Users className="h-3.5 w-3.5" /> Gênero
          </FieldLabel>
          <Select
            value={state.patient.genero}
            onValueChange={(v) => setPatientField("genero", v)}
          >
            <SelectTrigger id="genero" className="w-full">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Mulher cis">Mulher cis</SelectItem>
              <SelectItem value="Homem cis">Homem cis</SelectItem>
              <SelectItem value="Mulher trans">Mulher trans</SelectItem>
              <SelectItem value="Homem trans">Homem trans</SelectItem>
              <SelectItem value="Não-binário">Não-binário</SelectItem>
              <SelectItem value="Outro">Outro</SelectItem>
              <SelectItem value="Prefiro não informar">
                Prefiro não informar
              </SelectItem>
            </SelectContent>
          </Select>
        </Field>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Field>
          <FieldLabel htmlFor="escolaridade">
            <GraduationCap className="h-3.5 w-3.5" /> Escolaridade
          </FieldLabel>
          <Select
            value={state.patient.escolaridade}
            onValueChange={(v) => setPatientField("escolaridade", v)}
          >
            <SelectTrigger id="escolaridade" className="w-full">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Ensino Fundamental Incompleto">
                Ensino Fundamental Incompleto
              </SelectItem>
              <SelectItem value="Ensino Fundamental Completo">
                Ensino Fundamental Completo
              </SelectItem>
              <SelectItem value="Ensino Médio Incompleto">
                Ensino Médio Incompleto
              </SelectItem>
              <SelectItem value="Ensino Médio Completo">
                Ensino Médio Completo
              </SelectItem>
              <SelectItem value="Ensino Técnico">Ensino Técnico</SelectItem>
              <SelectItem value="Ensino Superior Incompleto">
                Ensino Superior Incompleto
              </SelectItem>
              <SelectItem value="Ensino Superior Completo">
                Ensino Superior Completo
              </SelectItem>
              <SelectItem value="Pós-graduação">Pós-graduação</SelectItem>
              <SelectItem value="Mestrado">Mestrado</SelectItem>
              <SelectItem value="Doutorado">Doutorado</SelectItem>
              <SelectItem value="Outro">Outro</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <Field>
          <FieldLabel htmlFor="ocupacao">
            <Briefcase className="h-3.5 w-3.5" /> Ocupação atual
          </FieldLabel>
          <Input
            id="ocupacao"
            type="text"
            placeholder="Ex.: analista financeiro"
            value={state.patient.ocupacao}
            onChange={(e) => setPatientField("ocupacao", e.target.value)}
          />
        </Field>
      </div>
      <Field>
        <FieldLabel htmlFor="queixa">
          <MessageSquarePlus className="h-3.5 w-3.5" /> Motivo da consulta e
          observações
        </FieldLabel>
        <Textarea
          id="queixa"
          rows={3}
          placeholder="Descreva o motivo da consulta e observações iniciais"
          value={state.patient.queixaPrincipal}
          onChange={(e) => setPatientField("queixaPrincipal", e.target.value)}
        />
      </Field>
    </div>
  );
}
