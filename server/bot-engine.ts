import fs from 'node:fs';
import path from 'node:path';
import OpenAI from 'openai';
import { apiKey } from './config';
import { ChatCompletionCreateParamsNonStreaming } from 'openai/resources/chat/index';

const openai = new OpenAI({
    apiKey,
});

const MODEL = 'gpt-3.5-turbo';

export const chatCompletion = async (data: ChatCompletionCreateParamsNonStreaming) => {
    const payload: ChatCompletionCreateParamsNonStreaming = {
        model: 'gpt-3.5-turbo',
        temperature: 0,
        ...data,
    };
    const chatCompletion = await openai.chat.completions.create(payload);

    console.log('bot says ' + JSON.stringify(chatCompletion.choices[0]));

    return chatCompletion;
};

// List n fine-tuning jobs
export const getJobs = async (limit = 10) => openai.fineTuning.jobs.list({ limit });

// Retrieve the state of a fine-tune
export const getJobState = async (jobId: string) => openai.fineTuning.jobs.retrieve(jobId);
export const getJobEvents = async (jobId: string) => {
    //api.openai.com/v1/fine_tuning/jobs/ftjob-bMMMfr5AmtXN84ogcCpOYlfj/events
    const res = await fetch(`https://api.openai.com/v1/fine_tuning/jobs/${jobId}/events`, {
        headers: {
            Authorization: `Bearer ${process.env.OPENAI_KEY}`,
        },
    });
    return res.json();
};
// export const getJobEvents = async (jobId: string, limit: number = 15) => openai.fineTuning.list_events(jobId, limit);

// Cancel a job
export const cancelJob = ({ jobId }: { jobId: string }) => {
    return openai.fineTuning.jobs.cancel(jobId);
};
// export const cancelJob = async (jobId: string) => openai.fineTuning.jobs.cancel(jobId);

// List up to 10 events from a fine-tuning job
export const getFineTuningEvents = (jobId: string, limit = 10) => openai.fineTuning.jobs.listEvents(jobId, { limit });

// Delete a fine-tuned model (must be an owner of the org the model was created in)
//@ts-expect-error
export const deleteTunedModel = (model: string) => openai.models.delete(model);

export const createJob = async ({ suffix, trainingFile }: { suffix?: string; trainingFile: string }) => {
    const file = await openai.files.create({
        file: fs.createReadStream(path.resolve('server/training-data', trainingFile)),
        purpose: 'fine-tune',
    });

    return openai.fineTuning.jobs.create({
        training_file: file.id,
        suffix,
        model: 'gpt-3.5-turbo-0613',
    });
};

export function getFileNamesInFolder(folderPath: string) {
    try {
        const files = fs.readdirSync(folderPath, { withFileTypes: true });
        return files.map(({ name }) => name);
    } catch (err) {
        console.error(`Error reading folder: ${err.message}`);
        return [];
    }
}
